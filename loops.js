function forLoop(array){
  for (i=1; i<=25; i++) {
    if (i===1) {
      array.push("I am 1 strange loop");
    } else {
      array.push(`I am ${i} strange loop.`);
    }
  }  
}

let array = [];

forLoop(array);

console.log(array);