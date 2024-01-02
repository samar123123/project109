function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true,video:false
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2uPuksehN/model.json',{probabilityThreshold: 0.7 } ,modelReady);
}
function modelReady(){
    classifier.classify(gotResult);
}
var dog=0;
var cat=0;
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear -  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML=' Animal - '+ (results[0].confidence*100).toFixed(2)+" %";

        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";

        img=document.getElementById('dog');
        img1=document.getElementById('cat');
        img2=document.getElementById('ear');
      
        if (results[0].label == "Barking") {
            img.src='dog.gif';
            img.src='download.png';
            img.src='ear.png';
           
        }
        else  if (results[0].label == "Meowing") {
            img.src='dog.png';
            img.src='cat.gif';
            img.src='ear.png';
           
        }
        else  if (results[0].label == "Background") {
            img.src='dog.png';
            img.src='download.png';
            img.src='ear.gif';
        }
       
    }
}

