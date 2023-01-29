const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3001;
const io = require('socket.io')(http, {cors: {origin: true, credentials:true, optionSuccessStatus:200}});

import {gameDataObject} from "./utilities/gameData"
import {updateRegionPoints} from "./utilities/updateGameData"
import {getIndexByGamecode} from "./utilities/getIndexByGameCode"


interface SocketEvents {
    on: (event:string, callback: (data: any) => void) => void;
    emit: (event:string, data: any) => void;
  }

  
io.on("connection", (socket:SocketEvents) => {   
  
  //  console.log("user connected")
  
  
  // Receiving testing message from client 
  socket.on("testing_from_client", (text:number) => {
    console.log("Message from Client to Server: ", text)
    // Sending answer to client
    socket.emit("testing_from_server", "OK from server");
  });


  // Receiving points and region destination from user
  socket.on("user_got_point", (pointData:{userName:string, points:number, regionId:number, gameCode:number, team:string}) => {
    // Adds user point to GameData | ./utilities/updateGameData.ts
    updateRegionPoints(pointData)
    // Send updated regions part of GameData to users | Will later be all users in a room based on gameCode
    socket.emit("send_gamedata_to_users", gameDataObject[getIndexByGamecode(pointData.gameCode)].regions);

    console.log("user_got_point: ", pointData)
  });
  
})



http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});
  