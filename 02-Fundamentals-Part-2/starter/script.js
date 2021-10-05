"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //Strict mode lifts an error because this variable does not exist
if (hasDriversLicense) console.log("I can drive");
