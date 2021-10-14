'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  //Return different values from the same function using destructuring
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//First example of destructuring
const arr = [0, 1, 2];

//This is the old and hard way to do it
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructuring
const [x, y, z] = arr;
console.log(x, y, z);

//We don't have to destructure all of the properties from the array
const [cat1, , cat3] = restaurant.categories;
console.log(cat1, cat3);

//Return different values from the same function using destructuring
const [starterDish, mainDish] = restaurant.order(2, 0);
console.log(starterDish, mainDish);

//Default values for the variables we create to destructure
const [first, second, third = 1] = [8, 9];
console.log(first, second, third);

//Destructuring objects
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

//Assigning a different name to the variables
const { name: restName, categories: tags, openingHours: hours } = restaurant;
console.log(restName, tags, hours);

//Assigning a default value to undefined variables
const { menu = [] } = restaurant;
console.log(menu);

//Destructuring nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//Split operator
const newMainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMainMenu);

//Merge 2 different arrays
const completeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(completeMenu);

//Rest pattern
const [d, e, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//Rest parameters
const add = function (...numbers) {
  let sum = 0;
  numbers.forEach(num => {
    sum += num;
  });
  console.log(sum);
};

add(2, 3);
add(4, 5, 6);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);
