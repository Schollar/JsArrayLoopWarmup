// Declaring variables

var amazon_products = ['Toys', 'Books', 'Electronics', 'Furniture', 'Clothing'];
// console logging various array index's
console.log(amazon_products[0]);

console.log(amazon_products[amazon_products.length - 1]);

// creating while loop that logs each item in the array

// Setting up our while loop counter
var i = 0;
// The loop that logs each item
while (i < amazon_products.length) {
    console.log(amazon_products[i]);
    i++;
}
// Creating a for loop that logs each item in the array
for (i = 0; i < amazon_products.length; i++) {
    console.log(amazon_products[i]);
}

// Creating a second array
var ratings = [1.5, 3, 2, 3, 5];

// Creating a loop that if rating is equal to or greater than 4, it logs excellent product
// If rating is 3-3.9, it logss good product
// If rating is 2-2.9 it logs okay product
// otherwise it logs item is bad product

// Setup our loop counter
var r = 0;
while (r < ratings.length) {
    if (ratings[r] >= 4) {
        console.log(`${amazon_products[r]} is an excellent item`);
    } else if (ratings[r] >= 3) {
        console.log(`${amazon_products[r]} is a good item`);
    } else if (ratings[r] >= 2) {
        console.log(`${amazon_products[r]} is an okay item`)
    } else {
        console.log(`${amazon_products[r]} is a bad item`)
    }
    r++;
}

// Creating an array of numbers

var weather = [10, 13, 20, 14, 15, 17, 80, 40];

// Creating a loop to figure out how many days until it gets to 20 degrees

// setup loop counter 

var w = 0;
// This loops checks to see if the weather matches to what we want, and then if it does it logs the array index item number of said day to tell you how many days to go.
while (w < weather.length) {
    if (weather[w] >= 20) {
        console.log(`You need to wait ${w} days before going to the beach`);
    }
    w++
}