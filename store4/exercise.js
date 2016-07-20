// Remember what goes here?
var store4 = require('./store4-data.js');
// ^^^^^^^^^^^^ ACCESSING DATA ^^^^^^^^^^^^
// What is the cost of 'Dark Chocolate Crunchies' from store4?
console.log(store4["Dark Chocolate Crunchies"].cost);

// Set the total number of 'Berry Bites' sold by store4 to a variable.
var berryBites = store4["Berry Bites"]["sold on"].length;

// ^^^^^^^^^^^^ LOOPING OVER DATA ^^^^^^^^^^^^
// Create a loop to return an array of the candies that cost more than $2.00
var overTwoDollars = [];
for (var key in store4){
	if (store4[key].cost > 2){
		overTwoDollars.push(key);
	}
}
console.log(overTwoDollars);

// Create a loop to return an object that has the candy name as the key and the cost as the value
var candyCost = {};

for (var key in store4){
	candyCost[key] = store4[key].cost;
}

console.log(candyCost);

// ^^^^^^^^^^^^ CHALLENGE ^^^^^^^^^^^^
// Calculate how much money store4 made selling Peppermint Poppers. What about Caramel Twists? (Each date represents 1 item sold.)
var caramelTwistsTotal = store4["Caramel Twists"].cost * store4["Caramel Twists"]["sold on"].length;

console.log(caramelTwistsTotal.toFixed(2));


// Determine how much money did store3 make on January 9th.
var total = 0;
for (var key in store4){
	total += store4[key].cost * store4[key]["sold on"].length;
}

console.log(total);

// Calculate how much store4 made from selling Dark Chocolate Crunchies across all the days.
DarkChocTotal = store4["Dark Chocolate Crunchies"].cost * store4["Dark Chocolate Crunchies"]["sold on"].length;

console.log(DarkChocTotal);
