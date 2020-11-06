const express = require('express'); // Get the module
const app = express();
const http = require('http').createServer(app);
const path = require('path');
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user has connected');
  socket.on('calculate', (result) => {
    io.emit('calculate', result);
    console.log('result: ' + result);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
