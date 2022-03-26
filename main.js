//Filters : Mustache, Glasses, Hat, Rabbit Ears, Devil Horns, Helmet, Clown, Mask, Cap, Beanie  

filter = "";

noseX = 0;
noseY = 0;

leftEarX = 0;
leftEarY = 0;
rightEarx = 0;
rightEarY = 0;

leftEyeX = 0;
leftEyeY = 0;
rightEyeX = 0;
rightEyeY = 0;

mustache = "";
cap="";
clown="";
glasses="";
mask="";
rabbit="";
horns="";
hat="";
beanie="";
helmet="";

function preload(){

    mustache = loadImage("mustache.png");
    cap = loadImage("cap.jpeg");
    clown = loadImage("clown.jpeg");
    glasses = loadImage("sunglasses.png");
    mask = loadImage("mask.png");
    rabbit = loadImage("rabit.jpeg");
    horns = loadImage("horns.jpeg");
    hat = loadImage("hat.png");
    beanie = loadImage("beanie.jpg");
    helmet = loadImage("helment.jpeg");

}

function setup(){

    canvas = createCanvas(800, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){

    console.log("Model Has Been Initialized")

}

function draw(){

    image(video, 0, 0, 800, 600);

}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + ", Nose Y = " + noseY);

        leftEyeX = results[0].pose.leftEye.x;
        leftEyeY = results[0].pose.leftEye.y;
        rightEyeX = results[0].pose.rightEye.x;
        rightEyeY = results[0].pose.rightEye.y;
        console.log("Left Eye X = " + leftEyeX + ", Left Eye Y = " + leftEyeY + " | Right Eye X = " + rightEyeX + ", Right Eye Y = " + rightEyeY);

        leftEarX = results[0].pose.leftEar.x;
        leftEarY = results[0].pose.leftEar.y;
        rightEarX = results[0].pose.rightEar.x;
        rightEarY = results[0].pose.rightEar.y;
        console.log("Left Ear X = " + leftEarX + ", Left Ear Y = " + leftEarY + " | Right Ear X = " + rightEarX + ", Right Ear Y = " + rightEarY);

    }

}

function mustache(){

    filter = "mustache";
    console.log(filter);

}

function glasses(){

    filter = "glasses";
    console.log(filter);

}

function cap(){

    filter = "cap";
    console.log(filter);

}

function hat(){

    filter = "hat";
    console.log(filter);

}

function beanie(){

    filter = "beanie";
    console.log(filter);

}

function helmet(){

    filter = "helmet";
    console.log(filter);

}

function mask(){

    filter = "mask";
    console.log(filter);

}

function rabbit(){

    filter = "rabbit";
    console.log(filter);

}

function horns(){

    filter = "horns";
    console.log(filter);

}

function clown(){

    filter = "clown";
    console.log(filter);

}
