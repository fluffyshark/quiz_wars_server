const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3001;


http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
  });