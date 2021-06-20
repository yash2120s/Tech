//Create variables here
var canvas, bg;
var student;
var appState = 0;
var studentCount;
var allstudent;
var distance = 0;
var database;
var maths,chemistry,physics,biology,hindi,english,subjects;


var form, player, game;


function preload()
{
	//load images here
// bg = loadImage("bg.png")
}

function setup() {
 
  //creating canvas

	createCanvas(windowWidth,windowHeight);

  //adding database

  database = firebase.database();

  // making background

  // back =  createSprite(150,150,50,10)
//back.addImage(bg)
//back.scale = 0.5

//making app 
app = new App();
app.getState();
app.start();

 

}


function draw() {  
  //ading bg colour
background("white")
  
if(appState === 1){
  
  // creating  subject

  subject = createButton("Subjects")
  subject.position(displayWidth/2,displayHeight/2)

  subject.mousePressed(()=>{
    appState = 2;
    app.update(2)
    subject.hide();
  })

}
if(appState === 2){
 
  //creating button for choosing other subject
  ch = createButton('Choose another subject')
  ch.position(displayWidth/2-150,displayHeight/3-100);

  //command for choosing another subject
  ch.mousePressed(()=>{
    appState = 1
    app.update(1)
  })
  
  //creating al subjects
  maths = createButton('Maths');
maths.position(displayWidth/2-150,displayHeight/2-30);

english= createButton('English');
english.position(displayWidth/2+150, displayHeight/2-80);

hindi = createButton('Hindi');
hindi.position(displayWidth/2-150,displayHeight/2-80);

chemistry = createButton('Chemistry');
chemistry.position(displayWidth/2+150,displayHeight/2-130);

physics = createButton('Physics');
physics.position(displayWidth/2+150,displayHeight/2-30);

biology = createButton('biology');
biology.position(displayWidth/2-150,displayHeight/2-130);

// creating command fo lessons

chemistry.mousePressed(()=>{




//creating lessons

l1 = createButton('Lesson1');
l1.position(displayWidth/2-150,displayHeight/2-30);

l2= createButton('Lesson2');
l2.position(displayWidth/2+150, displayHeight/2-80);

l3 = createButton('Lesson3');
l3.position(displayWidth/2-150,displayHeight/2-80);
//comand fo opening pdf of lessons

l1.mousePressed(()=>{

open("pdfs/ch l1.pdf")

}
)
l2.mousePressed(()=>{

open("pdfs/ch l2.pdf")

})

l3.mousePressed(()=>{

open("pdfs/ch l3.pdf")

})
}
)
    }

drawSprites();


}


