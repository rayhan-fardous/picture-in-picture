# Picture-in-Picture

This is a simple web application that allows users to share their screen and watch it in a Picture-in-Picture (PiP) window using the browser's native APIs.

## 🧩 Features

- Select screen/window to share using `getDisplayMedia`
- Stream the screen to a video element
- Enable Picture-in-Picture mode with a click of a button

## 📄 Code Overview

```js
const mediaStream = await navigator.mediaDevices.getDisplayMedia();
videoElement.srcObject = mediaStream;
await videoElement.requestPictureInPicture();
```

## 🛠 Technologies Used

- HTML5

- Vanilla JavaScript

- Web APIs: `MediaDevices`, `Picture-in-Picture`

## 🖼️ Demo
You can host this project, Example:

- [Github](https://rayhan-fardous.github.io/picture-in-picture/)
