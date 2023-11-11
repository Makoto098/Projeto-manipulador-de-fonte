function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", modelLoaded);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("Model Loaded!");
}

function gotPoses(results) {
  if (scorerightWrist > 0.2) {
    circle(rightWristX, rightWristY, 20);

    if (rightWrist > 0 && rightWrist <= 100) {
      document.getElementById("speed").innerHTML = "Velocidade = 0.5x";
      song.rate(0.5);
    } else if (rightWristY > 100 && rightWristY <= 200) {
      document.getElementById("speed").innerHTML = "Velocidade = 1x";
      song.rate(1);
    } else if (rightWristY > 200 && rightWristY <= 300) {
      document.getElementById("speed").innerHTML = "Velocidade = 1.5x";
      song.rate(1.5);
    } else if (rightWristY > 300 && rightWristY <= 400) {
      document.getElementById("speed").innerHTML = "Velocidade = 2x";
      song.rate(2);
    } else if (rightWristY > 300 && rightWristY <= 400) {
      document.getElementById("speed").innerHTML = "Velocidade = 2x";
      song.rate(2);
    } else if (rightWristY > 400) {
      document.getElementById("speed").innerHTML = "Velocidade = 2x";
      song.rate(2);
    }
  }
}
