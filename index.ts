const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3001;
const io = require('socket.io')(http, {cors: {origin: true, credentials:true, optionSuccessStatus:200}});



interface SocketEvents {
    on:any
    emit:any
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
      socket.on("user_got_point", (pointData:{user:string, points:number, regionId:number, gameCode:number}) => {
        console.log("user_got_point: ", pointData)
      });
  
  })



http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
  });