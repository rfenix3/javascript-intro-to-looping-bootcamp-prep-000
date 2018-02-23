function forLoop(array){
  for (let i=1; i<=25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }  
}

let array = [];

forLoop(array);

console.log(array);