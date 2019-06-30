const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const users = require('./users')();

const createMessage = (name, text, id) => ({name, text, id});

io.on('connection', socket => {
  // авторизация пользователя
  socket.on('userJoined', (data, callback) => {
    if (!data.name || !data.room) {
      return callback('Данные некорректны.');
    }

    socket.join(data.room);

    users.remove(socket.id);

    users.add({
      id: socket.id,
      name: data.name,
      room: data.room
    });

    callback({userId: socket.id});

    socket.emit('newMessage', createMessage('admin', `Добро пожаловать ${data.name}`));

    socket.broadcast
      .to(data.room)
      .emit('newMessage', createMessage('admin', `Пользователь ${data.name} зашел`));
  });

  // создание сообщения
  socket.on('createMessage', (data, callback) => {
    if (!data.text) {
      callback('Текст не может быть пустым.');
    }

    const user = users.get(data.id);

    if (user) {
      io.to(user.room)
        .emit('newMessage', createMessage(
          user.name,
          data.text,
          data.id
        ));
    }
    callback();
  });
});

module.exports = {
  app, server
};
