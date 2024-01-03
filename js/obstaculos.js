const obstaculosArray = []

class Obstaculo {
    constructor (){
        this.top = (Math.random() * canvasAlto/3) + 35
        this.bottom = (Math.random() * canvasAlto/3) + 35
        this.x = canvasAncho
        this.ancho = 30
        this.color = "red"
        this.contador = false
    }
    dibujarObstaculo(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, 0, this.ancho, this.top)
        ctx.fillRect(this.x, canvasAlto - this.bottom, this.ancho, this.bottom)
    }
    actualizarObstaculo(){
        this.x -= 2
        if (!this.contador && this.x < bird.x) {
            score++;
            this.contador = true;
        }
        this.dibujarObstaculo();
    }
}

const manejoObstaculos = () =>{
    if (frame%100 === 0) {
        obstaculosArray.unshift(new Obstaculo)
    }
    for (let i = 0; i < obstaculosArray.length; i++) {
        obstaculosArray[i].actualizarObstaculo()        
    }
    if (obstaculosArray.length > 20) {
        obstaculosArray.pop(obstaculosArray[0])
    }
}