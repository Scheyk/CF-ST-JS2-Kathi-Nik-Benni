// Let’s upgrade the previous exercise and create a nice looking responsive front-end for your program and create more messages (e.g. if the temperature is above 32°C output "The weather is hot" etc.) and you should display a proper image for the current weather condition.

let randomTemp = Math.floor(Math.random() * 45) - 5;

if (randomTemp <= 10) {
    document.getElementById('result').innerHTML = "<img src='../img/cold.png' alt='img cold' width='150px'> <p class='h3 mt-4'> The weather is cold </p>";
} else {
    if (randomTemp <= 20) {
        document.getElementById('result').innerHTML = "<img src='../img/ok.png' alt='img cold' width='150px'> <p class='h3 mt-4'> The weather is ok</p>";
    } else {
        if (randomTemp <= 30) {
            document.getElementById('result').innerHTML = "<img src='../img/warm.png' alt='img cold' width='150px'> <p class='h3 mt-4'> The weather is warm</p>";
        } else {
            document.getElementById('result').innerHTML = "<img src='../img/hot.png' alt='img cold' width='150px'> <p class='h3 mt-4'> The weather is hot</p>";
        }
    }
}