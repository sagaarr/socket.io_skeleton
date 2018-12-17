const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendfile('index.html');
});

// whenever user connects this gets executed 
io.on('connection', (socket) => {
  /*
  // console.log(socket);
  console.log("A user is connected");

  // Whenever someone disconnect this piece of code executed
  socket.on('disconnect', () => {
    console.log("user gone .....");
  });
  */
/*
  // message from server side example...
//  User connected....
  console.log("User connected");
    // Send a message to client after 4sec 
    setTimeout(function(){
      socket.send('<h1> Server Disconnected after 4sec</h1>')
    },4000)

  socket.on('disconnect', ()=> {
    console.log("user diconnected.........");
  })
  */
 //  User connected....
 console.log("User connected");
 // Send a message to client after 4sec 
 setTimeout(function(){
   socket.emit('EmitMessage', {emitExample: "<h1>Message send by emit </h1>"});
   //socket.emit('testerEvent', { description: 'A custom event named testerEvent!'});
 },4000)

socket.on('disconnect', ()=> {
 console.log("user diconnected.........");
})
});

/*
We have set up our server to log messages on connections and disconnections. We now have to include the client script and initialize the socket object there, so that clients can establish connections when required. The script is served by our io server at '/socket.io/socket.io.js'.
*/
http.listen(3000, () => { console.log("Port 3000 Ready") });

