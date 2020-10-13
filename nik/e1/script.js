let d = new Date;
var today = d.getDay();
console.log(today);
var a = d.getHours();
console.log(a);


   switch (today) {
      case 1: document.write("Monday "); if(a > 17){
        document.write("drinking is okay")
      } else {document.write("drinking is not okay")};
      break;
      case 2: document.write("Tuesday ");if(a > 17){
        document.write("drinking is okay")
      } else {document.write("drinking is not okay")};
      break;
      case 3 : document.write("Wednesday ");if(a > 17){
        document.write("drinking is okay")
      } else {document.write("drinking is not okay")};
      break;
      case 4: document.write("Thursday ");if(a > 17){
        document.write("drinking is okay")
      } else {document.write("drinking is not okay")};
      break;
      case 5 : document.write("Friday ");if(a > 17){
        document.write("drinking is okay")
      } else {document.write("drinking is not okay")};
      break;
      case 6 : document.write("Saturday ");if(a > 17){
        document.write("drinking is okay")
      } else {document.write("drinking is not okay")};
      break;
      case 7 : document.write("Sunday ");if(a > 17){
        document.write("drinking is okay")
      } else {document.write("drinking is not okay")};
      break;
      default: document.write("Unknown mark")
   }