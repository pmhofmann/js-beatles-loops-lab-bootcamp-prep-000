// add solution here
function theBeatlesPlay(musicians,instruments){
  const testArray = [];

  for(let i = 0, l = musicians.length ; i < l; i++){
    testArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return testArray;
}

function johnLennonFacts(facts) {
  const outputFacts = [];

  let i = 0;
  while (i < facts.length) {
    outputFacts.push(`${facts[i]}!!!`);
    i++;
  }

  return outputFacts;
}

