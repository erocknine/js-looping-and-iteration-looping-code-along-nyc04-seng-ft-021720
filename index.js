// Code your solutions in this file

function writeCards(array, occasion){
  let thankYouCards = [];
  for (let i = 0; i < array.length; i++){
    thankYouCards.push(`Happy Birthday, ${array[i]}!`)
  }
  return thankYouCards
}

function countDown(number){
  let counter = number;
  while (0 < number){
    console.log(number--);
  }
}