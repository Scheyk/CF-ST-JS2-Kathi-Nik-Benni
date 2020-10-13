// Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate. This program should generate a different random number every time, that should be between -5°C and 25°C. If the temperature is between -5°C and 10°C print "The weather is cold" otherwise print "The weather is moderate".

let randomTemp = Math.floor(Math.random() * 26) - 5;

if (randomTemp <= 10) {
    document.getElementById('result').innerHTML = randomTemp + "C<br> The weather is cold";
} else {
    document.getElementById('result').innerHTML = randomTemp + "C<br> The weather is moderate";
}