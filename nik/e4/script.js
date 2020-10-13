//Let’s upgrade the previous exercise and create a nice looking responsive front-end for your program 
//and create more messages (e.g. if the temperature is above 32°C output "The weather is hot" etc.) 
//and you should display a proper image for the current weather condition.
var temp = 0;
temp = Math.floor(Math.random() * 55) + -5;
console.log(temp);
if (temp < 10) {
    document.getElementById('res').innerHTML = (" <h1>The weather is cold</h4> <br> <img src = https://www.nesglobal.net/wp-content/uploads/AdobeStock_209055685.jpeg width='200px'>");
    
}
else {
    if (temp < 25){
        document.getElementById('res').innerHTML = (" <h1>The weather is moderate<h1> <br> <img src = https://alanbatnews.net/assets/2019-09-21/images/248175_6_1569053410.jpg width='200px'> ");
    }
    else{
        if (temp >=45){
            document.getElementById('res').innerHTML = (" <h1>It burns<h1> <img src = https://i.imgflip.com/3kjelk.png>");
        }
        else{
            document.getElementById('res').innerHTML = (" <h1>The weather is hot</h2> <br> <img src = https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/sun/red-sun-in-the-sky.-photo-cristian-lozan.jpg width='200px'>");
        }
        
    }
    
}
