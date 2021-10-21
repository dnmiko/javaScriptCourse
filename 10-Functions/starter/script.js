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

createBooking('A340');
createBooking('A340', 5);
createBooking('A340', 5, 2500);
console.log(bookings);
