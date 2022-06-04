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

socket.emit('join-room');

const addStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', ()=> {
        video.play()
    })
videoGrid.append(video)
}