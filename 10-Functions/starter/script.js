'use strict';

const bookings = [];

//Default parameters
const createBooking = function (flightNum, numPassengers = 1, price = 500) {
  //Old way to do default parameters
  /*   numPassengers = numPassengers || 1;
  price = price || 500; */

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
};

createBooking('A340'); //Two default parameters at the end
createBooking('A340', 5); // One default param
createBooking('A340', 5, 2500);

//Higher-order functions
const delWhitespaces = function (str) {
  return str.toLowerCase().replace(/ /g, '');
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

const transformStr = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformStr('Hola soy Diego', upperFirstWord);

//Higher-order functions that return functions
const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const greetinMsg = greet('Hola');
greetinMsg('Diego');
greetinMsg('Fof');

greet('Alo')('Fafi');
