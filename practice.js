// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;
  _.each(numbers, function(numbers) {
    if (numbers % 5 === 0) {
      count += 1;
    }
  });
  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
//_.filter returns a new array based on the function result (=== true)
var onlyOneFruit = function(fruits, targetFruit) {
  fruits = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
  return fruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  fruits = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
  return fruits;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  desserts = _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });
  return desserts;

};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function(total, element) {
    return total + Number(element.price.slice(1));
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  return _.reduce(desserts, function(obj, dessert) {
    obj[dessert.type] = (obj.hasOwnProperty(dessert.type)) ? obj[dessert.type] + 1 : 1;
    return obj;
  }, {});
};


// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  return _.reduce(movies, function(arr, movie) {
    if(movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      arr.push(movie.title);
    }
    return arr;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(movieExists, movie) {
    return ((!movieExists) && (movie.runtime < timeLimit)) ? true : movieExists;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  var upperCaseArray = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return upperCaseArray;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function(dessert) {
    dessert.glutenFree = dessert.ingredients.includes('flour') ? false : true;
    return dessert;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(grocery) {
    grocery.id = grocery.id;
    grocery.product = grocery.product;
    grocery.price = grocery.price;
    var dollarAndCents = (grocery.price.slice(1)).split('.');
    var dollar = dollarAndCents[0];
    var cents = dollarAndCents[1];
    var inDollarCents = Number(dollar + cents);
    var salePriceInDollarCents = (Math.round(inDollarCents * 80 / 100)).toString();
    var saleCents = salePriceInDollarCents.slice(-2);
    var saleDollars = salePriceInDollarCents.slice(0, salePriceInDollarCents.length - 2);
    grocery.salePrice = '$' + saleDollars + '.' + saleCents;
    return grocery;
  });

};
