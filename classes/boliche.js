class Boliche {
    constructor(posX, posY){
        this.raio = 30;
        var config = {
        isStatic: true
        }
        this.corpo = Bodies.circle(posX, posY, this.raio, config);
        this.imagem = loadImage("./assets/cannonball.png");
        World.add(world,this.corpo);
    }

    rabisco(){
        var pos = this.corpo.position;
        push();
        imageMode(CENTER)
        image(this.imagem, pos.x, pos.y, this.raio, this.raio);
        pop();
    }
    bang(){
        Matter.Body.setStatic(this.corpo,false);
        Matter.Body.setVelocity(this.corpo,{x:30,y:-20});
    }
}    