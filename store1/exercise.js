var store1 = require('./store1-data.js');

// *********** ACCESSING DATA *********** \\

// How would you access the value '4.63' from store1?

console.log(store1["2015-01-08"][0][1]);


// How would you access how many 'Mint Wafers' were sold on January 7th?

console.log(store1["2015-01-07"][3][0]);

// Produce an array of the date keys in store1's data.
var dateKeys = [];
for (var key in store1){
  dateKeys.push(key);
}
console.log(DateKeys);

// *********** LOOPING OVER DATA *********** \\


// Create a loop to read which candies were sold by store1 on Jan 8. After simply outputting the data, try creating an array that contains the candy names.
var candy = [];
for (i=0; i<store1["2015-01-08"].length; i++){
	candy.push(store1["2015-01-08"][i][0]);
}
console.log(candy);

// Create a loop to count the total number of candies sold on Jan 10 at store1. Where do you have to initialize the counter variable? Why?
var count = 0;
for(i=0; i<store1["2015-01-10"].length; i++){
	count += store1["2015-01-10"][i][2];
}
console.log(count);

// Use `Object.keys()` to get an array of the dates that candies were sold at store1.
console.log(Object.keys(store1));

// Iterate over the generated array of dates. Use each date to console.log the specific sale data for the day from store1.
for (i=0; i<Object.keys(store1).length; i++){
	console.log(store1[Object.keys(store1)[i]]);
}

// Use a loop to calculate the total number of candies sold at store1.
var count = 0;
for (j=0; j<Object.keys(store1).length; j++){
	for (i=0; i<store1[Object.keys(store1)[j]].length; i++){
		count += store1[Object.keys(store1)[j]][i][2];
	}
}
console.log(count);

// In the previous exercise, where did you have to initialize the counter variable? Why?
// There were two counter variables to loop through the date arrays and then the candy arrays for each date

// *********** CHALLENGE *********** \\

// Create an array of the candies sold by store1 on January 10th.
var candy = [];
for (i=0; i<store1["2015-01-10"].length; i++){
	candy.push(store1["2015-01-10"][i][0]);
}
console.log(candy);
