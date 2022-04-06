song="";
song2="";
status1="";
status2="";
scoreLeftWrist=0;
scoreRightWrist=0;
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload() {
    song = loadSound("music1.mp3");
    song2 = loadSound("music2.mp3");
}

 function setup() {
    canvas = createCanvas(500,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video,0,0,500,400);
    fill("#FF0000");
    stroke("#FF0000");

    status1=song.isPlaying();
    status2=song2.isPlaying();

    if(scoreleftWrist>0) {
        circle(leftWristX,leftWristY,20);  
        song2.stop();
        if(status1==false) {
            song.play();
            document.getElementById("song").innerHTML="playing samajavaragamana song:"
        } 
        if(scorerightWrist>0) {
            circle(rightWristX,rightWristY,20);  
            song1.stop();
            if(status2==false) {
                song.play();
                document.getElementById("song").innerHTML="playing maguva maguva song:"
            } 
    }
    
    
    InNumberleftWristY= Number(leftWristY);
    remove_decimals= floor(InNumberleftWristY);


}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function modelLoaded() {
    console.log('PoseNet Is Inialized');
}

function gotPoses(results) {
if(results.length>0)
{
    console.log(results);
    scoreRightWrist=results[0].pose.keypoints[10].score;
    scoreLeftWrist=results[0].pose.keypoints[9].score;
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX=" + leftWristX + "leftWristY=" +leftWristY);

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX=" + rightWristX + "rightWristY=" +rightWristY);
}
}
