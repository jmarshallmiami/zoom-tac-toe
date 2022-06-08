const socket = io('/');

socket.emit('join-room',GAME_ID);

socket.on('user-connected', () => {
    connectNewPlayer();
})

const connectNewPlayer = () => {
 console.log("New Player joined");
};