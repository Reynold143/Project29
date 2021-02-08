const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var hex, string;

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    platform1 = new Platform(600,height,1200,20);
    platform2 = new Platform(150, 305, 300, 170);

    hexagon = new Hex (60,200)

    //level two
    block8 = new Square(330,235,30,40) 
    block9 = new Square(360,235,30,40);
    block10 = new Square(390,235,30,40)
    block11 = new Square(420,235,30,40)
    block12 = new Square(450,235,30,40)
    //level three
    block13 = new Square(360,195,30,40)
    block14 = new Square(390,195,30,40)
    block15 = new Square(420,195,30,40)
    //top
    block16 = new Square(390,155,30,40)


    string = new String(hexagon.body,{x:180,y:120});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);

    platform1.display()
    platform2.display()

    hexagon.display()
    
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()

    string.display()
    
    
    
    
}
/*works only when the mouse is dragged 
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX , y:mouseY})
}
//works once the mouse button is released
function mouseReleased(){
    sling.fly()
}*/


