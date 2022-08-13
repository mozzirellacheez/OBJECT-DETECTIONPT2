img="";
status="";

function preload(){
    img=loadImage("dog_cat.jpg");

}

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",model_loaded);
    document.getElementById("status").innerHTML="status:detecting objects"

}

function model_loaded(){
    console.log("Model Is Loaded");
    status=true
    objectDetector.detect(img,gotResults);

}
function gotResults(error,results){
    if (error) {
        console.error(error)
    }
    else{
        console.log(results);
    }
}


function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("dog",45,75);
    noFill();
    stroke("red");
    rect(30,60,450,350);
}