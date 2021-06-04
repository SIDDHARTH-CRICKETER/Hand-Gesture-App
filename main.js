Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HhR-XT4hG/model.json',modelLoaded);

function modelLoaded() {
  console.log('Model Loaded!')
}

function check()
  {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results); 
 document.getElementById("result_emotion_name").innerHTML = results[0].label;

    if(results[0].label == "Hand Scissor")
    {
    document.getElementById("update_emoji").innerHTML = "&#128406;";
    }
    if(results[0].label == "Ok Hand Sign")
    {
 document.getElementById("update_emoji").innerHTML = "&#128076;";
     
    }
    if(results[0].label == "Victory")
    {
	    document.getElementById("update_emoji").innerHTML = "&#9996;";
    }

    if(results[0].label == "Cross Finger")
    {
	    document.getElementById("update_emoji").innerHTML = "&#129310;";
    }
    if(results[0].label == "Yo")
    {
	    document.getElementById("update_emoji").innerHTML = "&#129311;";
    }
    if(results[0].label == "Thumbs Up")
    {
	    document.getElementById("update_emoji").innerHTML = "&#128077;";
    }

  }
}