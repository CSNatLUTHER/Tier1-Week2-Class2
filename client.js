// ARRAYS AND LOOPS

let hand = ["7 of the Clubs", 'Ace of Spades', 'Queen of Hearts', '3 of Diamonds']
console.log('our hand', hand)

//review how many are in my hand
console.log('length of array: ', hand.length)

//accessing the first card:
console.log('first card:', hand[0])

//access the last card
console.log( 'last card:', hand[hand.length -1 ]);

//NEW STUFF

//does the array include a value?
console.log( 'is the Ace of Spades in our hand?', hand.includes( 'Ace of Spades'));
console.log( 'is the 5 Diamonds in our hand?', hand.includes( '5 of Diamonds'));

//get the index of a value
console.log( 'index of Ace of Spades:',hand.indexOf('Ace of Spades') );//Does exist
console.log( 'index of 5 of Diamonds:',hand.indexOf('5 of Diamonds') );//Doesn't exist


//Start with actions from flowchart (see flowchart screenshsot)
// check in in array

let cardSearch = 'Ace of Spades'; 
console.log ( 'searching for: ', cardSearch );

if(hand.includes( cardSearch ) ){
    console.log( cardSearch, (' found in hand' ));
// if so, find index
const myIndex = hand.indexOf ( cardSearch )
console.log( cardSearch, 'index value is: ', myIndex);
// splice out of array
const splicedCard = hand.splice (myIndex, 1 );
// log card removed
console.log( 'splicedCard: ', splicedCard[0] );
}
else{

//if not, log out in hand    
console.log( 'not in hand');
}

//// BONUS TIME ////
// strings are like arrays of charactres ///
let catName = 'commander wisdom'
console.log( 'how many characters are in', catName, ':', catName.length);
console.log( 'does the name include a "p": ', catName.includes( 'p' ));

let email = 'asdf@qwer.com';
if (email.includes ( '@') && email.includes( '.')){
    console.log( 'This is a valid email');
}
else{
    console.log( 'This is a NOT a valid email');
}