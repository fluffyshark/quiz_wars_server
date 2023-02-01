const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3001;
const io = require('socket.io')(http, {cors: {origin: true, credentials:true, optionSuccessStatus:200}});

import {gameDataObject, newGameData} from "./utilities/gameData"
import {updateRegionPoints, calculateVictoryPoints} from "./utilities/updateGameData"
import {getIndexByGamecode} from "./utilities/getIndexByGameCode"


interface SocketEvents {
  on: (event:string, callback: (data: any) => void) => void;
  emit(event: string, data: any): void;
  to(event: string): EmitFn;
  join(event: string): void;
  id: string
}

interface EmitFn {
  emit(event: string, data: any): void;
}

  
io.on("connection", (socket:SocketEvents) => {   
  
  //  console.log("user connected")

  
  // Host create socket room (game code) and a new game data object
  socket.on("host_create_room", (gameCode) => {
    // Host join (and create) room
    socket.join(gameCode); 
    // Creating new game data object for the game
    newGameData(socket.id, gameCode)
    console.log(gameDataObject)
    console.log(gameDataObject.length)

  /*
  // If game is ongoing then players who join will immedietly enter game
    if (gameDataObject[getIndexByGamecode(gameCode)].gameStatus === "game_ongoing") {
      // Declaring list of players
      let newPlayerData = gameDataObject[getIndexByGamecode(gameCode)].users
      // Tell player to start game, sending gameData
      io.to(socket.id).emit("start_game", newPlayerData); 
    }
    */
  
  });

  

  socket.on("host_starting_game", (gameCode) => { 
    // Changing game status to from "GAME_ONBOARDING" into "GAME ACTIVE", game status is primarly 
    // used for allowing late joining users to directly enter game instead of being stuck in lobby
    gameDataObject[getIndexByGamecode(gameCode)].gameStatus = "GAME_ACTIVE"
    // Telling all users in game (room) that the game has started
    io.in(gameCode).emit("host_has_started_game"); 
  })


  // Send users a all gameCodes, to validate their game code input, to make sure that they enter a socket room created by host 
  socket.on("user_requesting_all_gamecodes", () => { 
    let allGameCodes = []
    for (let i = 0; i < gameDataObject.length; i++) {allGameCodes.push(gameDataObject[i].gameCode)}
    socket.emit("sending_user_gamecodes_request", allGameCodes);
  })


// When player join, then player data is sent to host, player nickname are displayed on host screen
  socket.on("player_joining", (userInfo: {username:string, gameCode:string, team:string}) => { 
    // User join room
    socket.join(userInfo.gameCode); 
    // Sending joined player data to host, to be used to display player name on screen
    socket.to(userInfo.gameCode).emit("player_accepted", userInfo);
    // Sending player their socket id
  //  io.to(socket.id).emit("sending_playerID", socket.id);
    // Adding joined player to game data
    gameDataObject[getIndexByGamecode(userInfo.gameCode)].users.push({userId: socket.id, username: userInfo.username, points: 0, gameCode: userInfo.gameCode, team: userInfo.team})
    console.log("player_joining", gameDataObject[getIndexByGamecode(userInfo.gameCode)].users)
  });


  // Receiving points and region destination from user
  socket.on("user_got_point", (pointData:{userName:string, points:number, regionId:number, gameCode:string, team:string}) => {
    // Adds user point to GameData | ./utilities/updateGameData.ts
    updateRegionPoints(pointData)
    // Send updated regions part of GameData to users | Will later be all users in a room based on gameCode
    socket.emit("send_gamedata_to_users", gameDataObject[getIndexByGamecode(pointData.gameCode)].regions);

    console.log("user_got_point: ", pointData)
  });


  // Receiving request from client host every 60 seconds to calculate and send victory points to all users in game   
  socket.on("requesting_victory_points", (gameCode:string) => {
    // Calculating victory points from all regions in the game
    const victoryPoints = calculateVictoryPoints(gameCode)
    // Sending answer to client
    socket.emit("sending_victory_points", victoryPoints);
  });
  
})





http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});
  