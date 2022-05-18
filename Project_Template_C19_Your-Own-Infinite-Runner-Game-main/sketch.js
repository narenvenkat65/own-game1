var monkey,monkeyImage
var ground
var bg,bgimg
var fruitsgroup
var obstaclegroup
var gamestate='play'
var restart
function preload(){
monkeyImage=loadAnimation("1.png","2.png","3.png","4.png","5.png")
bgimg=loadImage("park.jpg")
apple=loadImage("apple.png")
banana=loadImage("banana2.png")
stone=loadImage("stone.jpg")
restartimg=loadImage("restart.jpg")
}

function setup() {
    createCanvas(600,500)
   
    bg =createSprite(300,30)
bg.addImage(bgimg)
bg.scale=1
 monkey = createSprite(30,200)
 monkey.addAnimation("running",monkeyImage)
 //camera.position.y=monkey.y
 ground = createSprite(400,450,800,5)
ground.visible=false
fruitsgroup=new Group()
obstaclegroup
restart=createSprite(50,300)
restart.addImage(restart.jpg)
restart.visible=false
}

function draw() {

    background("blue")
if(gamestate==="play"){
    if(keyDown("space")  && monkey.y>350){
        monkey.velocityY=-8
    }
    bg.velocityX=-2
    if (bg.x<0){
bg.x=400

    }
    monkey.velocityY +=0.5
    monkey.collide(ground)
    fruits()
    if(monkey.isTouching(fruitsgroup)){
monkey.scale+=0.01
fruitsgroup.destroyEach()
    }
obstacle()
if(monkey.isTouching(obstaclegroup)){
    monkey.scale-=0.01
    obstaclegroup.destroyEach()
}
if(monkey.scale<0.3){
    gamestate="end"
}
}
else if(gamestate==="end"){
    restart.visible=true
    if(mousePressedover(restart)){
restarts();

    }
}

   

   
   
    
 drawSprites();
}
function fruits(){
    if(frameCount %300===0){
var fruit=createSprite(700,random(300,400))

fruit.velocityX=-2
var r=Math.round(random(1,2))
switch(r){
    case 1:
        fruit.addImage(banana)
        break
        case 2:
            fruit.addImage(apple)
            break
}
fruit.scale=0.2
fruitsgroup.add(fruit)
    }
}
function obstacle(){
if(  frameCount%300){
var obstacle=createSprite(850,450)
obstacle.velocityX=-3

var r=math.round(random(1,2))
switch(r){
    case 1:
        obstacle.addImage(bush)
        break
        case 2:
            obstacle.addImage(stone)
            break



}
obstacle.scale=0.4
obstaclegroup.add(obstacle)
}


}
function restarts(){

monkey.destroy()
obstaclegroup.destroyEach()
fruitsgroup.destroyEach()
bg.velocityX=0



}