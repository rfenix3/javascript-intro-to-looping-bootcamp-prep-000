function forLoop(array){
  for (let i=0; i<25; i++) {
    array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }  
}

let array = ["dog", "cat"];

forLoop(array);

console.log(array);