var store2 = require('./store2-data.js');

/////////// ACCESSING DATA ///////////

// Set the sale dates for 'Banana Bunches' from store2 to a variable.
var BananaBunchesSaleDates = store2["sale dates"]["Banana Bunches"];
console.log(BananaBunchesSaleDates);

// What built-in array property would you use to determine how many sale dates there for store2's 'Banana Bunches'?
console.log(saleDates.length);

/////////// UPDATING DATA ///////////

// Set a variable to equal the prices of the 'Mint Wafers' in store2. Then reassign it to a new value. When you update your new variable, does the price in the store2 data change? Why or why not?
var mintWafers = store2["inventory prices"]["Mint Wafers"];
console.log(mintWafers);
mintWafers = 1.50;
console.log(mintWafers);
console.log(store2["inventory prices"]["Mint Wafers"]);
// No the price within the object does not change because it is inmutable

// Set a variable equal to the Peanut Butter Buttered Peanuts sale dates in store2. Use pop to remove one of the sale dates for store2's Caramel Twists.
var PBPeanutsSalesDates = store2["sale dates"]["Peanut Butter Buttered Peanuts"];
console.log(PBPeanutsSalesDates);

store2["sale dates"]["Caramel Twists"].pop();
console.log(store2["sale dates"]["Caramel Twists"]);

/////////// LOOPING OVER DATA ///////////

// Iterate over the store2 sale dates for Caramel Twists. Use this to create an object containing dates as the key and the value as the quantity sold on that day.
var salesDates = [];
var caramelTwists = {};
for (var key of store2["sale dates"]["Caramel Twists"]){
	salesDates.push(key);
}

salesDates.forEach(function(x){
	if(!caramelTwists[x]){
		caramelTwists[x] = 0;
	}
	caramelTwists[x] += 1;
});

console.log(caramelTwists);

// Iterate over store2's sale dates data to find which day had the most total number of sales. How did you calculate this?
var salesDates_all = [];
for (var key in store2["sale dates"]){
	for (var i of store2["sale dates"][key]){
		salesDates_all.push(i);
	}
}
console.log(salesDates_all);

var totalSales = {};
salesDates_all.forEach(function(x){
	if(!totalSales[x]){
		totalSales[x] = 0;
	}
	totalSales[x] += 1;
});

console.log(totalSales);

/////////// CHALLENGE ///////////

// Create an object containing the amounts that store2 made by selling each type of candy.
// Pull the sales data objects for each candy
var candySales = store2["sale dates"];
console.log(candySales);
console.log("-------");

//Create an empty object to populate teh candies and total sales volume
var candySaleDates = {};

//loop through the keys in candySales
for(var key in candySales){
	//within the array, loop through the dates
	for (var i = 0; i<candySales[key].length; i++){
		// if the date is not within our candySaleDate object...
		if (!candySaleDates[key]){
			//create it and populate it with a value of 0
		candySaleDates[key] = 0;
		}
		// Count up the sales volume by 1
		candySaleDates[key] += 1;
	}
}
console.log(candySaleDates);
