function setup(){
    canvas = createCanvas(600,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

PoseNet = ml5.poseNet(video,modelLoaded);
PoseNet.on("pose", gotPoses);
}





function modelLoaded(){
    console.log("PoseNet is ready")
   }





function draw(){
    image(video , 0 , 0 , 600 , 600)
}





song1 = "";
song2 = "";





function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}






leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;







function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

    }
}