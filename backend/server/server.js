const io = require("socket.io")();
const uuid = require("uuid");
const messageHandler = require("../socket.io_backend/handlers/massage.handler");

const users = {};

function createUserAvatarUrl() {
  const rand1 = Math.round(Math.random() * 200 + 100);
  const rand2 = Math.round(Math.random() * 200 + 100);
  return `https://placeimg.com/${rand1}/${rand2}/any`;
}

function createUsersOnline() {
  const values = Object.values(users);
  const onlyWithUsernames = values.filter(u => u.username !== undefined);
  return onlyWithUsernames;
}

io.on("connection", socket => {
  console.log("a user connected!");
  console.log(socket.id);
  users[socket.id] = { userId: uuid() };
  socket.on("join", username =>{
    users[socket.id].username = action.data;
    users[socket.id].avatar = createUserAvatarUrl();
    messageHandler.handleMessage(socket, users);
  });  
  socket.on("disconnect", () => {
    delete users[socket.id];
    io.emit("action", { type: "users_online", data: createUsersOnline() });
  });
  socket.on("action", action => {
    switch (action.type) {
      case "server/join":
        console.log("Got join event", action.data);
        users[socket.id].username = action.data;
        users[socket.id].avatar = createUserAvatarUrl();
        io.emit("action", {
          type: "users_online",
          data: createUsersOnline()
        });
        break;
      case "server/private_message":
    }
  });
});

io.listen(3000);