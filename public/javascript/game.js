const socket = io();

socket.on('message', message => {
    console.log(message)
})

// socket.emit("join-room", GAME_ID);

// socket.on("user-connected", () => {
//   connectNewPlayer();
// });

// const connectNewPlayer = () => {
//   console.log("New Player joined");
// };
