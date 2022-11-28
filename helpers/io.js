// const path = require("path");
// const { Server } = require("socket.io");
// let onlineUsers = [];
// // HELPER FUNCTIONS

// const addNewUser = (username, socketId) => {
//   !onlineUsers.some((user) => user.username === username) && onlineUsers.push({ username, socketId });
// };

// const removeUser = (socketId) => {
//   onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
// };

// const io = new Server({
//   cors: {
//     origin: `*`,
//     credentials: true,
//     methods: ["GET", "POST"],
//     transports: ["websocket"],
//   },
//   allowEIO3: true,
// });

// io.on("connection", (sock) => {
//   sock.on("newUser", (userId) => {
//     addNewUser(userId, sock.id);
//   });

//   sock.on("disconnect", () => {
//     console.log(onlineUsers);
//     removeUser(sock.id);
//   });
// });

// io.listen(5000);
// module.exports = { io, onlineUsers };

// let io;

// module.exports = {
//   init: (server) => {
//     io = require("socket.io").listen(server);
//     io.origins("*:*");
//     return io;
//   },
//   get: () => {
//     if (!io) {
//       throw new Error("socket is not initialized");
//     }
//     return io;
//   },
// };
