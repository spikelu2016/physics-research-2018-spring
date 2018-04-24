const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const axios = require('axios');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
  socket.on('join', (room) => {
    socket.join(room);
    socket.currentRoom = room;
  });

  socket.on('disconnect', () => {
    // axios.post('http://localhost:3000/api/deleteOnlineUser', "delete")
    // .then((r) => {
    //   if(r.data.error) {
    //     console.log(r.data.error);
    //   } else {
    //     console.log("logout");
    //   }
    // })
    socket.leave(socket.currentRoom);
  });

  socket.on('newMessage', (data) => {
    let newMessage = {
      text: data.text,
      firstname: data.firstname,
      profilepic: data.profilepic
    }

    socket.broadcast.to(socket.currentRoom).emit('newMessage', newMessage);
  })

  socket.on('newOnlineUser', (data) => {
    var newOnlineUser = data;
    socket.broadcast.to(socket.currentRoom).emit('newOnlineUser', newOnlineUser);
  })
});

app.use('/api', api);

app.get('/*', (request, response) => {
  response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

server.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
