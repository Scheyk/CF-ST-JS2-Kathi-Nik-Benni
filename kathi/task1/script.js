let today = new Date().getDay();
console.log(today);

switch (today) {
    case 1:
        document.getElementById('result').innerHTML = "monday";
        break;
    case 2:
        document.getElementById('result').innerHTML = "tuesday";
        break;
    case 3:
        document.getElementById('result').innerHTML = "wednesday";
        break;
    case 4:
        document.getElementById('result').innerHTML = "thursday";
        break;
    case 5:
        document.getElementById('result').innerHTML = "friday";
        break;
    case 6:
        document.getElementById('result').innerHTML = "saturday";
        break;
    case 7:
        document.getElementById('result').innerHTML = "sunday";
        break;
    default:
        document.getElementById('result').innerHTML = "no match";

}