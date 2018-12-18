const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req,res) => {
  res.sendfile('nameSpace.html');
})

const NSP = io.of('/name-space');
NSP.on('connection', (socket) => {
  console.log('Client Connected...');
  NSP.emit('hi', "Hiii everyOne....");
})





http.listen(3000, () => console.log('Connected to port 3000 !!!'));