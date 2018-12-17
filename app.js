const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendfile('index.html');
});

// whenever user connects this gets executed 
io.on('connection', (socket) => {
socket.on('clientEmit' , (data) => console.log(data));
});


/*
We have set up our server to log messages on connections and disconnections. We now have to include the client script and initialize the socket object there, so that clients can establish connections when required. The script is served by our io server at '/socket.io/socket.io.js'.
*/
http.listen(3000, () => { console.log("Port 3000 Ready") });

