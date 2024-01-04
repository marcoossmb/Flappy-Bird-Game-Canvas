const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const contenedor = document.getElementById("contenedor")
const flapSound = document.getElementById("flapSound");
const deadSound = document.getElementById("deadSound");
const backgroundMusic = document.getElementById("backgroundMusic");
const btn__musica = document.getElementById("btn__musica");

const canvasAncho = 600
const canvasAlto = 400
const FPS = 60

let imagenAvatar = document.createElement("IMG");
imagenAvatar.src = "../assets/images/bird.png";

let spacePressed = false;
let frame = 0;
let score = 0;

const background = new Image();
background.src = '../assets/images/fondo.png';

const mostrarBackground = () => {
    ctx.drawImage(background, 0, 0, canvasAncho, canvasAlto)
}

const animate = () => {
    ctx.clearRect(0, 0, canvasAncho, canvasAlto);
    mostrarBackground();
    manejoObstaculos();
    bird.actualizar();
    bird.dibujar();
    ctx.fillStyle = "black";
    ctx.font = "90px Georgia";
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    verificarColision();
    frame++;
};

let juegoEnMarcha;

const iniciarJuego = () => {
    canvas.style.display = "block"
    main.style.display = "none"
    contenedor.style.backgroundColor = "transparent"
    juegoEnMarcha = setInterval(animate, 1000 / FPS);
    document.removeEventListener("keyup", iniciarJuegoEvent);
}

const iniciarJuegoEvent = (event) => {
    if (event.code === "Space") {
        iniciarJuego();
    }
}

document.addEventListener("keyup", iniciarJuegoEvent);

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        spacePressed = true;
        flapSound.play();
    }
});

document.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        spacePressed = false;
    }
});

const verificarColision = () => {
    for (let i = 0; i < obstaculosArray.length; i++) {
        const obstaculo = obstaculosArray[i];

        // Verificar colisión en el eje X
        if (bird.x < obstaculo.x + obstaculo.ancho &&
            bird.x + bird.ancho > obstaculo.x) {
            // Verificar colisión en el eje Y
            if (bird.y < obstaculo.top ||
                bird.y + bird.alto > canvasAlto - obstaculo.bottom) {
                deadSound.play();
                clearInterval(juegoEnMarcha);
                ctx.font = "25px Georgia";
                ctx.fillStyle = "black";
                ctx.fillText("Game Over, tu puntuación es " + score, 160, canvasAlto / 2 - 10);

                let btn_volver = document.createElement("button");
                btn_volver.id = "btn_volver";
                btn_volver.textContent = "Volver a Jugar";
                btn_volver.classList.add("btn__volver");
                document.body.appendChild(btn_volver);
            }
        }
    }
}

document.addEventListener("click", (event) => {
    if (event.target.id === "btn_volver") {
        location.reload();
    }
});

backgroundMusic.volume = 0.5;

const toggleBackgroundMusic = () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        btn__musica.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        backgroundMusic.pause();
        btn__musica.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
}

btn__musica.addEventListener("click", toggleBackgroundMusic);