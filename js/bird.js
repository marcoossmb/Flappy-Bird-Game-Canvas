class Bird {
    constructor(){
        this.x = 50;
        this.y = 200;
        this.vy = 0;
        this.ancho = 20;
        this.alto = 20;
        this.peso = 1;
    }
    actualizar(){
        if (this.y > canvasAlto - (this.alto * 2)) {
            this.y = canvasAlto - (this.alto * 2)
            this.vy = 0
        } else {
            this.vy += this.peso
            this.y += this.vy
        }
        if (spacePressed) {
            this.flap()   
        }
    }
    dibujar(){
        ctx.drawImage(imagenAvatar, this.x, this.y, this.ancho, this.alto);
    }
    flap(){
        this.vy -= 2
    }
}
const bird = new Bird();