const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasAncho = 600
const canvasAlto = 400
const FPS = 60

let imagenAvatar = document.createElement("IMG");
imagenAvatar.src = "../assets/images/bird.png";

let spacePressed = false;
let frame = 0;

const animate = () => {
    ctx.clearRect(0, 0, canvasAncho, canvasAlto);
    bird.actualizar();
    bird.dibujar();
    manejoObstaculos();
    frame++;
};

setInterval(animate, 1000 / FPS);

window.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        spacePressed = true;
    }
});

window.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        spacePressed = false;
    }
});