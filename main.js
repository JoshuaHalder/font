
LeftwristX=0;
RightwristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

canvas=createCanvas(500,500);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded); 
poseNet.on('pose', gotPoses);
}

function draw(){

background('#6C91C2');
textSize(difference);
fill('#FFE787');
text('Joshua',50,400)
}

function modelLoaded(){ 
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
if(results.length>0){
LeftwristX=results[0].pose.leftWrist.x;
RightwristX=results[0].pose.rightWrist.x;
difference=floor(LeftwristX - RightwristX);

}
}