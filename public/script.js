const socket = io('/');

const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
myVideo.muted = true;

let userVideoStream;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
})
.then(stream => {
    userVideoStream = stream;
    addStream(myVideo, stream);
})

// socket.emit('join-room',GAME_ID);

// socket.on('user-connected', () => {
//     connectNewPlayer();
// })

// const connectNewPlayer = () => {
//  console.log("New Player joined");
// };

const addStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', ()=> {
        video.play()
    })
videoGrid.append(video)
}