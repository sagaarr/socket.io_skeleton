const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', (req, res) => {
      res.sendfile('broadcast.html');
});

var client = 0;
io.on('connection', (socket) => {
/*
  // In this client sends a message including the client who generated the message.
  client++;
  io.sockets.emit('broadcast', {message : client + ':No of client connected'});
  socket.on('disconnect' , () => {
    client--;
    io.sockets.emit('broad', {message: ` ${client } : No of client disconnected..`});
    console.log(` ${client } : No of client disconnected..`)
  });

  */
 client++;
 socket.emit('msg', {desc: "<h1>Hey there !!</h1>"});
 socket.broadcast.emit('message', {broadCast: `<h1>${client} : are now in our group!!</h1>`});
 socket.on('disconnect', () => {
   client--;
   socket.broadcast.emit('msgs', {goneClient: `<h1>${client} : are gone...</h1>`});
 })
});


http.listen(3000, ()=> {
  console.log("3000 port ready");
})