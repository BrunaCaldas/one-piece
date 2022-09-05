class Tripulacao {
    constructor(posX, posY, lar, alt, posicao, barbanegraAnimation){
        this.corpo = Bodies.rectangle(posX, posY, lar, alt);
        this.lar = lar;
        this.alt = alt;
        this.posicao = posicao;
        this.imagem = loadImage("./assets/boat.png");
        World.add(world, this.corpo);
        this.animation = barbanegraAnimation;
        this.velocidade = 0.05;
        this.titanic = false
    }

    marquinhos(){
        this.velocidade +=0.05;
    }

    rabisco(){
        var pos = this.corpo.position;
        var angle = this.corpo.angle;
        var index = floor(this.velocidade % this.animation.length);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation[index], 0, this.posicao, this.lar, this.alt);
        pop();
    }
        jacksparrow(index){
        this.titanic = true;
        this.velocidade = 0.05;
        this.animation = aotAnimation;
        this.lar = 300
        this.aot = 300
        setTimeout(()=>{
        World.remove(world, barbanegra[index].corpo);
        delete barbanegra[index];
        },2000)
        }
}