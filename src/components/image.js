import Image1 from "../../public/home.jpg";

const create360Viewer = require("360-image-viewer");
const canvasFit = require("canvas-fit");


const image = new Image();
image.src = Image1;

export const create360Image = () => {
  image.onload = () => {
    const viewer = create360Viewer({
      image: image,
    });

    document.body.appendChild(viewer.canvas);

    const fit = canvasFit(viewer.canvas, window, window.devicePixelRatio);
    window.addEventListener("resize", fit, false);
    fit();

    viewer.start();
  };
};