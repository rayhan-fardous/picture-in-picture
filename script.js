const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Catch error here
        console.log('Opps!, error here: ', error);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    //Start Picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

//On load
selectMediaStream();