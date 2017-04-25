/*
Given a credit card number, this function should return a string with the 
name of a network, like 'MasterCard' or 'American Express'
Example: detectNetwork('343456789012345') should return 'American Express'

Note: `cardNumber` will always be a string
Visa always has a prefix of 4 and a length of 13, 16, or 19.
Diner's Club network always starts with a 38 or 39 and is 14 digits long.
American Express network always starts with a 34 or 37 and is 15 digits long.

Heads up! Switch and Visa seem to have some overlapping card numbers - in any
apparent conflict, you should choose the network with the longer prefix.
*/

var detectNetwork = function(cardNumber) {
  if ((cardNumber.slice(0,2) === '38' || cardNumber.slice(0,2) === '39') && cardNumber.length === 14){
    return "Diner's Club";
  } else if (isItSwitch(cardNumber)) {
    return 'Switch';
  } else if ((cardNumber.slice(0,2) === '34' || cardNumber.slice(0,2) === '37') && cardNumber.length === 15){ 
    return "American Express";
  } else if ((cardNumber.slice(0,1) === '4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
    return "Visa";
  } else if (isItMasterCard(cardNumber)) {
    return 'MasterCard';
  } else if (isItDiscover(cardNumber)) {
    return 'Discover';
  } else if (isItChinaUnionPay(cardNumber)) {
    return 'China UnionPay';
  } else if (isItMaestro(cardNumber)) {
    return 'Maestro';
  } else {
    return "Card not found";
  }
};

/* helper functions */

const checkLength =(cardNumber, lengthArr) => {
  var doesLengthMatch = false;
  lengthArr.forEach(len => {
    if (cardNumber.length === len) {
      doesLengthMatch = true;
    }
  });
  return doesLengthMatch;
};

// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
const isItMaestro =(cardNumber) => {
  if (((cardNumber.slice(0,4) === '5018') || 
       (cardNumber.slice(0,4) === '5020') ||
       (cardNumber.slice(0,4) === '5038') ||
       (cardNumber.slice(0,4) === '6304') ) && (cardNumber.length >= 12 && cardNumber.length <= 19 )){
    return true;
  } else {
    return false;
  }
};

// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or
// 6759 and a length of 16, 18, or 19.
const isItSwitch =(cardNumber) => {
  let prefixs = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  let ccLengths = [16, 18, 19];
  let hashPrefixes = {};
  for (let p of prefixs){
      hashPrefixes[p] = true;
  }
  if (cardNumber.slice(0,4) in hashPrefixes && checkLength(cardNumber, ccLengths)) {
    return true;
  } else if (cardNumber.slice(0,6) in hashPrefixes && checkLength(cardNumber, ccLengths)) {
    return true;
  } else {
    return false;
  }
};

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and
// a length of 16-19.
const isItChinaUnionPay =(cardNumber) => {
  let hashPrefixes = {};
  let ccLengths = [16, 17, 18, 19];
  for(p = 622126; p <= 622925; p++){
    hashPrefixes[p] = true;
  }
  for(p = 624; p <= 626; p++){
    hashPrefixes[p] = true;
  }
  for(p = 6282; p <= 6288; p++){
    hashPrefixes[p] = true;
  }
  if (cardNumber.slice(0,3) in hashPrefixes && checkLength(cardNumber, ccLengths)) {
    return true;
  } else if (cardNumber.slice(0,4) in hashPrefixes && checkLength(cardNumber, ccLengths)) {
    return true;
  } else if (cardNumber.slice(0,6) in hashPrefixes && checkLength(cardNumber, ccLengths)) {
    return true;
  } else {
    return false;
  }
};

// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
const isItDiscover =(cardNumber) => {
  let hashPrefixes = {};
  let ccLengths = [16, 19];
  for(p = 644; p <= 649; p++){
    hashPrefixes[p] = true;
  }
  hashPrefixes['65'] = true;
  hashPrefixes['6011'] = true;
  if (cardNumber.slice(0,2) in hashPrefixes && checkLength(cardNumber, ccLengths)) {
    return true;
  } else if (cardNumber.slice(0,3) in hashPrefixes && checkLength(cardNumber, ccLengths)) {
    return true;
  } else if (cardNumber.slice(0,4) in hashPrefixes && checkLength(cardNumber, ccLengths)) {
    return true;
  } else {
    return false;
  }
};

// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
const isItMasterCard =(cardNumber) => {
  let hashPrefixes = {};
  let ccLengths = [16];
  for(p = 51; p <= 55; p++){
    hashPrefixes[p] = true;
  }
  if (cardNumber.slice(0,2) in hashPrefixes && checkLength(cardNumber, ccLengths)) {
    return true;
  } else {
    return false;
  }
};

