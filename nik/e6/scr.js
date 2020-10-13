//Please create an array of Numbers:  [8, 31, 89, 71, 57, 27]. 

//Now we are going to create a loop that will iterate 100 times.

//In this loop, you will have to compare the iteration number with all the elements from the array of Numbers. If there is a match, it should show on the screen the number of the iteration and the array element, just like that:

//“This is the iteration n and it matched with the number x”.


//If you like the challenge, add as well, from which array position the number came from, to the string:

//“This is the iteration n and it matched with the number x from the position j from the array”.




   let team = [ 8, 31 , 89, 71, 57, 27];
   let n = 100;
   console.log(team);
   for (let i = 0; i <= n; i++) {
       for (let x = 0; x < team.length; x++){
           if (i == team[x]){
       
               document.getElementById('res').innerHTML += `This is the iteration number: ${i} and it matched with the number ${team[x]} from the position ${x} from the array<br>`;
               
               }
           else{}
       }
      }
   
   
//for (var i = 0; i < 100; i++)  
   //for (i = team) {
    //document.write("The number is " + i + "<br>");
   //}