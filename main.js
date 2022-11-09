camera = document.getElementById("camera");
Webcam.set({

    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
     
 });
 Webcam.attach( '#camera' );

 function save_Image()
{
    Webcam.snap( function(data_uri){
        // display results in page
        document.getElementById('picture').innerHTML = 
         '<img src="'+data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BdHdit9ea/model/json",modelReady);

function modelReady()
{
    console.log("correct")
}
function speak()
{
    Synthesis = window.speechSynthesis;
    speak_data1 = "first prediction is "+prediction1;
    speak_data2 = "and second prediction is "+prediction2;
    speakthis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    Synthesis.speak(speakthis);
}

function gotresult(error, result) {
    if ( error) {
        console.error(error);
        
    }

    else {
        console.log(result);
        prediction1 = result[0].label;
        prediction2 = result[1].label;
        document.getElementById("emotion1").innerHTML = prediction1;
        document.getElementById("emotion2").innerHTML = prediction2;

        if(prediction1=="peace")
        {
            document.getElementById("emoji1").innerHTML = "&#9996;";
        }
        if(prediction2=="peace"){
            document.getElementById("emoji1").innerHTML = "&#9996;";
        }

        if(prediction1=="good")
        {
            document.getElementById("emoji1").innerHTML = "&#128077;";
        }
        if(prediction2=="good"){
            document.getElementById("emoji1").innerHTML = "&#128077;";
        }


        if(prediction1=="ok")
        {
            document.getElementById("emoji1").innerHTML = "&#128076;";
        }
        if(prediction2=="ok"){
            document.getElementById("emoji1").innerHTML = "&#128076;";
        }
        speak()

    }
}
