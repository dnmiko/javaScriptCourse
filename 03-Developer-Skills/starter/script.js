// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/**
 * Problem:
 * We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there mght be a sensor error."
 */

const temperatures = [3, -2, -6, -1, 'error', 1, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (array) {
    let lowestValue = array[0];
    let highestValue = array[0];

    array.forEach(temperature => {
        if (typeof temperature === 'number') {
            if (temperature < lowestValue) lowestValue = temperature;
            if (temperature > highestValue) highestValue = temperature;
        }
    });

    return highestValue - lowestValue;
};

console.log(calcTempAmplitude(temperatures));
