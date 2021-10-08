'use strict';

/**
 * Problem: Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
 */

const printForecastedTemperatures = function (forecasted) {
    forecasted.forEach((temp, i) => {
        if (typeof temp === 'number') {
            console.log(`The temperature in ${i + 1} days will be ${temp}oC`);
        }
    });
};

const forecast = [12, false, -5, 'Diego', 4];

printForecastedTemperatures(forecast);
