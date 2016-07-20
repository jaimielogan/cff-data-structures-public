// Hint: Don't forget to require in your data! Refer to store1 or store2 exercise.js files on how to do this.
var store3 = require('./store3-data.js');
//()()()()() ACCESSING DATA ()()()()()\\

// Set a variable equal to Berry Bites data for store3 on January 7.
var berryBitesJanSeven = store3[1]["inventory sold"]["Berry Bites"];

// Console log how many Mint Wafers were sold on January 9th?
console.log(store3[3]["inventory sold"]["Mint Wafers"].quantity);

// Set a variable equal to how many dates are included in the dataset.
var datesCount = store3.length;

//()()()()() LOOPING OVER DATA ()()()()()\\

// Create a loop to iterate over the sale data from store3. Use this loop to create an array of dates contained in the sale data.
var dates = [];
for (i=0; i<datesCount; i++){
	dates.push(store3[i].date);
}

// Use `Object.keys()` to loop over the inventory sold for January 10th in store3. While iterating over the data, create an object containing each candy's name and price.
var candyJanTen = {};
var salesJanTen = store3[4]["inventory sold"];
console.log(salesJanTen);
//Returns Object that includes candy name & nested object with cost & quantity
console.log("-------");

var salesJanTenKeys = Object.keys(salesJanTen);
console.log(salesJanTenKeys);
//Candy Names
console.log("-------");

for (var i = 0; i<salesJanTenKeys.length; i++){
	candyJanTen[salesJanTenKeys[i]] = salesJanTen[salesJanTenKeys[i]].cost;
}
console.log(candyJanTen);

// Create a loop to iterate over the whole store3 variable to find out how many Peanut Butter Buttered Peanuts were sold on all dates.
var PBTotal = {};
//Define Object to hold PBKey = "Peanut Butter Buttered Peanuts"
var PBKey = Object.keys(store3[0]["inventory sold"])[3];
//loop through the array store3 to populate the object with date and quantity
for(i=0; i<store3.length; i++){
	// Set the key equal to the store3[array index].date to get the date
	// The value will be equal to tehe store3[array index][PBKey (which was undefined earlier for simplification)].quantity to get the total quantity sold
	PBTotal[store3[i].date] = store3[i]["inventory sold"][PBKey].quantity;
}

console.log(PBTotal);

//()()()()() CHALLENGE ()()()()()\\

// Determine how much money store3 made on January 9th.
var JanNineKey = store3[3].date;
var JanNineTotal = 0;

for (var key in store3[3]["inventory sold"]){
	JanNineTotal += store3[3]["inventory sold"][key].cost * store3[3]["inventory sold"][key].quantity
}
console.log(JanNineTotal);
