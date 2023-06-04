musicone = "";
musictwo = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function preload(){
    musicone = loadSound("musicone.mp3");
    musictwo = loadSound("musictwo.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function modelLoaded(){
    console.log("model loaded!");
}

function gotPoses(){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("leftwristX = "+leftWristX+"  leftwristY = "+leftWristY);
        console.log("rightwristX = "+rightWristX+"  rightwristY = "+rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}