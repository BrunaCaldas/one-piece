const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, grama;
var campo;
var torre;
var defesa;
var birinbinha;
var algulodabirinbinha;
var bola8;
var pastel = [];
var iogurte;
var barbanegra = [];

function preload() {
  campo = loadImage("./assets/background.gif");
  defesa = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 grama = Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,grama);

 torre = Bodies.rectangle(160,350,160,310,options);
 World.add(world, torre);
 angleMode(DEGREES)
 algulodabirinbinha = 20
 birinbinha = new Bola (180,110,130,100,algulodabirinbinha)

}

function draw() {
  background(189);
  image(campo, 0, 0, 1200, 600);

  Engine.update(engine);
 
 rect(grama.position.x, grama.position.y,width*2,1);
  
 push();
 imageMode(CENTER);
 image(defesa,torre.position.x, torre.position.y, 160, 310);
 pop();
 birinbinha.rabisco();
 for(var chiclete = 0; chiclete < pastel.length; chiclete ++)
 {
   caldoDeCana (pastel[chiclete],chiclete)
 }
 capitaogancho();
 
}
 function keyReleased(){
 if(keyCode === DOWN_ARROW){
 pastel[pastel.length -1].bang();
 }
 }
 function keyPressed(){
  if(keyCode === DOWN_ARROW){
    var bola8 = new Boliche(birinbinha.posX, birinbinha.posY);
    pastel.push(bola8);
  }
 }
 function caldoDeCana(bola8, i){
    if(bola8){
      bola8.rabisco();
    }
 }
 function capitaogancho() {
 if (barbanegra.length >0 ){
 if(barbanegra[barbanegra.length-1].corpo.position.x<width -300){
 var positions = [-40,-60,-70,-20];
 var position = random (positions);
 var iogurte = new Tripulacao(width, height-60, 170, 170, position);
 barbanegra.push(iogurte);

 }
for (var i = 0; i<barbanegra.length; i ++){
if (barbanegra[i]){
  Matter.Body.setVelocity(barbanegra[i].corpo, {x: -0.9, y:0});
  barbanegra[i].rabisco();
 
}
}
 } else {
var iogurte = new Tripulacao(width, height-60, 170, 170, -80);
barbanegra.push(iogurte);
 }
 }