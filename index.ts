const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3001;
const io = require('socket.io')(http, {cors: {origin: true, credentials:true, optionSuccessStatus:200}});

import {gameDataObject} from "./utilities/gameData"
import {calculateVictoryPoints, updateRegionPoints} from "./utilities/updateGameData"
import {getIndexByGamecode} from "./utilities/getIndexByGameCode"


interface SocketEvents {
    on: (event:string, callback: (data: any) => void) => void;
    emit: (event:string, data: any) => void;
    to(event: string): void;
    join(event: string): void;
    id: string
  }

  
io.on("connection", (socket:SocketEvents) => {   
  
  //  console.log("user connected")
  
  
// Player and host join the same room
socket.on("join_room", (gameCode) => {
  socket.join(gameCode); 
  console.log("socket.id", socket.id)

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
  

  // Receiving points and region destination from user
  socket.on("user_got_point", (pointData:{userName:string, points:number, regionId:number, gameCode:number, team:string}) => {
    // Adds user point to GameData | ./utilities/updateGameData.ts
    updateRegionPoints(pointData)
    // Send updated regions part of GameData to users | Will later be all users in a room based on gameCode
    socket.emit("send_gamedata_to_users", gameDataObject[getIndexByGamecode(pointData.gameCode)].regions);

    console.log("user_got_point: ", pointData)
  });


  // Receiving request from client host every 60 seconds to calculate and send victory points to all users in game   
  socket.on("requesting_victory_points", (gameCode:number) => {
    // Calculating victory points from all regions in the game
    const victoryPoints = calculateVictoryPoints(gameCode)
    // Sending answer to client
    socket.emit("sending_victory_points", victoryPoints);
  });
  
})





http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});
  