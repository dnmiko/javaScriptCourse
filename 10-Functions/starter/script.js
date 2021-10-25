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

//transformStr('Hola soy Diego', upperFirstWord);

//Higher-order functions that return functions
const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

//const greetinMsg = greet('Hola');
//greetinMsg('Diego');
//greetinMsg('Fof');

//greet('Alo')('Fafi');

//Call and Apply Method
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passengerName,
    });
  },
};

lufthansa.book(239, 'Diego');
lufthansa.book(145, 'Cris');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

//Here we are creating a new regular function, where the this keyword does not exist, it is no longer a method inside an object
const book = lufthansa.book;

//The call method helps us to assign the this keyword a value or an owner
book.call(eurowings, 456, 'Muchi');

//The apply method lets us do the same as the call method (to apply a this keyword) but it does receive an array with the parameters instead of the params itself
book.apply(lufthansa, [654, 'Pepe']);

//Bind method creates a new function with the this keyword pointing to the object we share.
const euroWingsBooking = book.bind(eurowings);
//This is a new function with the this keyword being eurowings
euroWingsBooking(789, 'Jorge');

//Bind method with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  console.log(`Number of planes for ${this.airline}: ${this.planes}`);
};

//For the Event Listeners the 'this' keyword points to the DOM element tat was clicked. Here we use the bind method instead of call because the EventHandler is waiting for a function, not the call of a function
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

//This function has access to the passenger count variable created in the Execution Stack from secure booking
const booker = secureBooking();

booker();
booker();
booker();
