var temp = 0;
temp = Math.floor(Math.random() * 26) + -5;
console.log (temp);
if (temp < 10) {document.getElementById('res').innerHTML =(" The weather is cold ");
    
    } 
    else {
        document.getElementById('res').innerHTML =(" The weather is moderate ");
    }
