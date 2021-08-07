//Create variables here
var database;
var button, message;
var gameState;
var count = 0;

function setup() 
{
  database=firebase.database();
	createCanvas(1000,500);

  database.ref('CPS').on("value",function(data){
    count = data.val()
  })
 

         button = createButton("0");
         button.position(500,95);
         button.mousePressed(counter);
         button.size('700', '400')

         message=createElement('h2')
         message.html("CPS Counter Game")
         message.position(750,40);
 

}

function counter() {
  database.ref('CPS').update({
    CPS:count+1
  })
}




function draw() 
{

  background('lightgreen')
  

  drawSprites();
}