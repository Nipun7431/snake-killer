var hero, weapon, villagers;
var snake1, snake2;
var heroImg, villagersImg, weaponImg;
var snake1Img, snake2Img;
var background, backgroundImg
var edges;

function preload(){
heroImg = loadImage("Images/HeroImg.jpg");
weaponImg = loadImage("Images/WeaponImg.jpg");
snake1Img = loadImage("Images/Snake1Img.png");
snake2Img = loadImage("Images/Snake2Img.png");
villagersImg = loadImage("Images/VillagerImg.jpg");
backgroundImg = loadImage("Images/Background Img.jpg");
}

function setup(){
  
  createCanvas(1200, 800);
  edges = createEdgeSprites();
 // background = createSprite();
 // background.addImage(backgroundImg);
  hero = createSprite(250, 700, 50, 25);
  hero.addImage(heroImg);
  hero.scale = 0.5
  weapon = createSprite(350, 700, 50, 25);
  weapon.addImage(weaponImg);
  weapon.scale = 0.1
  snake1 = createSprite(950, 300, 50, 25);
  snake1.addImage(snake1Img);
  snake1.scale = 0.1
  snake2 = createSprite(950, 750, 50, 25);
  snake2.addImage(snake2Img);
  snake2.scale = 0.5
  villagers = createSprite(200, 200, 50, 25);
  villagers.addImage(villagersImg);
  villagers.scale = 0.2
  
  
}

function draw(){
  background(backgroundImg);
  move();
  launch();
  kill();
  retreat();
 
  weapon.bounceOff(edges[1]);
  drawSprites();
}

function move(){
  if(keyDown(UP_ARROW)){
  //  weapon.y = weapon.y - 10;
     hero.y = hero.y - 10;
  }
  if(keyDown(DOWN_ARROW)){
  //  weapon.y = weapon.y + 10;
    hero.y = hero.y + 10;
  }
}
 
function launch(){
  if(keyDown("space")){
    weapon.x = weapon.x + 0;
    //weapon.velocityY = 0;
    snake2.velocityX = -3;
    snake2.velocityY = -1;
  }
}


function kill(){
  if(weapon.isTouching(snake1)){
    weapon.bounceOff(snake1);
     snake1.destroy();
     
     
  }
  else if(weapon.isTouching(snake2)){
    weapon.bounceOff(snake2);
    snake2.destroy();
  }
}

function retreat(){
  if(weapon.isTouching(hero)){
     weapon.velocityX = 0;
     weapon.velocityY = 0;
  }
  if(keyDown("space")){
    weapon.velocityX = 5;

  }
}


