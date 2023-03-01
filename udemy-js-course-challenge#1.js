// "use strict";
// ///////////////////////////////////////////////////
// ///////////34 Funnctions //////////////////////////
// ///////////////////////////////////////////////////

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// // const interface = 'Audio';
// // const private = 534;

// function logger() {
//   console.log("My name is Mukhamedzhan");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// /////////////////////////////////////////////////////
// /////////Functions Declaration vs Expressions////////
// /////////////////////////////////////////////////////

// // Function decalration...
// function calcAge1(birthYeah) {
//   return 2037 - birthYeah;
// }

// const age1 = calcAge1(1991);

// // Function expression...
// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

// // Arrow function...
// const calcAge3 = (birthYeah) => 2037 - birthYeah;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYeah, firstName) => {
//   const age = 2037 - birthYeah;
//   const retirement = 65 - age;
//   //return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearUntilRetirement(1991, "Jonas"));
// console.log(yearUntilRetirement(1980, "Bob"));
///////////////////*************************************************************************************************************************************/////////////////
//////////////////******************************************************************CODING CHALLENGE #1*************************************************/////////////////
///////////////////*************************************************************************************************************************************/////////////////

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log("Dolphins won...");
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log("Koalas won...");
  } else {
    console.log("No team won...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
