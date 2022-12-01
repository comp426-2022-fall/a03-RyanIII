export function roll(sides, dice, rolls) {
  
  var results = [];
  for(let i = 0; i < rolls; i++){
    var initRoll = 0;
    for(let j = 0; j < dice; j++){
      var holder = Math.floor(Math.random() * sides) + 1;
      initRoll += holder;
    }
    results[i] = initRoll;
  }
  
  let final = {
    "sides": sides,
    "dice": dice,
    "rolls": rolls,
    "results": results
  }
  
  return final;
}
