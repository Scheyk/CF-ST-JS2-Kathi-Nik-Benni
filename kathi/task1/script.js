let today = new Date().getDay();
let hours = new Date().getHours();
let message;
if (hours < 15) {
    message = "not time to drink yet";
} else {
    message = "yes, it's time to rock";
}
console.log(today);

switch (today) {
    case 1:
        document.getElementById('result').innerHTML = "monday " + message;
        break;
    case 2:
        document.getElementById('result').innerHTML = "tuesday " + message;
        break;
    case 3:
        document.getElementById('result').innerHTML = "wednesday " + message;
        break;
    case 4:
        document.getElementById('result').innerHTML = "thursday " + message;
        break;
    case 5:
        document.getElementById('result').innerHTML = "friday " + message;
        break;
    case 6:
        document.getElementById('result').innerHTML = "saturday " + message;
        break;
    case 0:
        document.getElementById('result').innerHTML = "sunday " + message;
        break;
    default:
        document.getElementById('result').innerHTML = "no match";

}