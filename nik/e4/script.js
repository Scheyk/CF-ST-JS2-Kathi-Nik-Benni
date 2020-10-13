//Let’s upgrade the previous exercise and create a nice looking responsive front-end for your program 
//and create more messages (e.g. if the temperature is above 32°C output "The weather is hot" etc.) 
//and you should display a proper image for the current weather condition.
var temp = 0;
temp = Math.floor(Math.random() * 41) + -5;
console.log(temp);
if (temp < 10) {
    document.getElementById('res').innerHTML = (" The weather is cold ");

}
else {
    document.getElementById('res').innerHTML = (" The weather is moderate ");
}
