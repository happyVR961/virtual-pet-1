//Create variables here
var database;
var dog, happyDog, foodStock;
var Dog,Dog1;
var foodS;
function preload()
{
   dog  = loadImage("Dog.png");
   happyDog = loadImage("happydog.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  foodStock = database.ref('Food/Value');
  foodStock.on("value", function(data){
    foodS = data.val();
  });
  Dog = createSprite(200,240,10,10);
   //Dog.shapeColor = "red";
   Dog.scale = 0.5;
   Dog.addImage( "DOG", dog);
}

function draw() {  
  background(46,139,87);
  //Dog = createSprite(200,240,10,10);
  //Dog1 = createSprite(200,240,10,10);
 // Dog.addImage( "DOG", dog);
  //Dog1.addImage("doggo", happyDog);
  //Dog1.visible = false;
  //Dog.scale = 0.5;
  //Dog1.scale = 0.5;
  if (keyDown("UP_ARROW")){
    writeStock(foodS);
    //Dog.visible = false;
    //Dog.x = 1000;
    //Dog.destroy();
    //Dog1.visible = true;
    Dog.addImage( "doggo",happyDog);
  }

  drawSprites();
  //add styles here
  textSize(15);
  fill("black");
  text("Food Remaining : " + Math.round(foodS) , 50,50);
  //text("Note : Press UP_ARROW key to feed Drago milk!", 100,100);

}
// function readStock(data){
//   foodS = data.val();
// }

function writeStock(x){
database.ref('Food').set({
  Value: foodS - 0.5
  
})
}


