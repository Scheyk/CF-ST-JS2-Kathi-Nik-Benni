let theArray = [8, 31, 89, 71, 57, 27];
let iterationNumber = 100;

for (let i = 0; i <= iterationNumber; i++) {
    for (let x = 0; x < theArray.length; x++) {
        if (i == theArray[x]) {
            document.getElementById('result').innerHTML += `This is the iteration ${i} and it matched with the number ${theArray[x]} <br>`;
        }
    }
}


// “This is the iteration n and it matched with the number x from the position j from the array”.
for (let i = 0; i <= iterationNumber; i++) {
    for (let x = 0; x < theArray.length; x++) {
        if (i == theArray[x]) {
            document.getElementById('result2').innerHTML += `This is the iteration ${i} and it matched with the number ${theArray[x]} from the position ${x} from the array <br>`;
        }
    }
}