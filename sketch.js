const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var stand;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;


function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 395, 1200, 10)
    stand = new Ground(800, 260, 200, 10);
    block1 = new BBox(740, 235, 30, 40);
    block2 = new BBox(770, 235, 30, 40);
    block3 = new BBox(800, 235, 30, 40);
    block4 = new BBox(830, 235, 30, 40);
    block5 = new BBox(860, 235, 30, 40);
    block6 = new GBox(770, 195, 30, 40);
    block7 = new GBox(800, 195, 30, 40);
    block8 = new GBox(830, 195, 30, 40);
    block9 = new PBox(800, 155, 30, 40);
}

function draw(){
    background(0)
    ground.display();
    stand.display();
    block1.display();
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    textSize(20)
    fill("white")
    text("Drag the hexagonal stone and reelease release it to launch it towards the blocks", 50, 50)
}