// Create a one-dimensional array with ten different names inside it. Using the for loop, print each name in a new row.

let oneDimensionArray = ['nameOne', 'nameTwo', 'nameThree', 'nameFour', 'nameFive', 'nameSix', 'nameSeven', 'nameEight', 'nameNine', 'nameTen'];

for (let i = 0; i < oneDimensionArray.length; i++) {
    document.getElementById('result').innerHTML += oneDimensionArray[i] + '<br>';
}