//Create variables here
var dog, happydog,database, foodS, foodStock;
function preload()
{
	//load images here
  dogimg= loadImage("images/dogImg.png");
  dogimg1= loadImage("images/dogImg1.png");


}

function setup() {
  database= firebase.database();
	createCanvas(500, 500);
  dog= createSprite(200,300,40,40);
  dog.addImage(dogimg1);
  dog.scale=0.3;
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {  
  background("lightblue")
  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(dogimg);

  }
      fill("green")
      textSize(25)
  text("Press Up-arrow to feed the dog",100,100);
text("Food Available="+foodS,200,450)
  drawSprites();
  //add styles here

}


function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
