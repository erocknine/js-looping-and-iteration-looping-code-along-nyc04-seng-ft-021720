// Code your solutions in this file

function writeCards(array, occasion){
  let thankYouCards = [];
  for (let i = 0; i < array.length; i++){
    thankYouCards.push(`Happy Birthday, ${array[i]}!`)
  }
  return thankYouCards;
}

function countDown(number){
  while (number > 0){
    console.log(number);
    number--;
  }
  console.log(number);
}