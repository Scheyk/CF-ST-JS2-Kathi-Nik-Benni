//Please create an array of Numbers:  [8, 31, 89, 71, 57, 27]. 

//Now we are going to create a loop that will iterate 100 times.

//In this loop, you will have to compare the iteration number with all the elements from the array of Numbers. If there is a match, it should show on the screen the number of the iteration and the array element, just like that:

//“This is the iteration n and it matched with the number x”.


//If you like the challenge, add as well, from which array position the number came from, to the string:

//“This is the iteration n and it matched with the number x from the position j from the array”.

var team = [ 8, 31 , 89, 71, 57, 27];
console.log(team);
for (var i = 0; i < 100; i++) {
    if (i = team){
    
    document.getElementById('res').innerHTML += ("This is the iteration number: " + i + "<br> <br>");
    var i = 100;
    }
    else{}
   }
   
   
//for (var i = 0; i < 100; i++)  
   //for (i = team) {
    //document.write("The number is " + i + "<br>");
   //}