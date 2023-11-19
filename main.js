/*problem 1.)
part a. */
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("ages", ages);
let minusAge = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAge);

/*part b. */
ages.push(44);
console.log("ages after pushing another age", ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);

/*part c*/
let agesSum = 0;
for (let i = 0; i < ages.length; i++) {
  agesSum += ages[i];
  console.log("index", i, "agesSum", agesSum);
}
console.log("total", agesSum);
let averageAge = agesSum / ages.length;
console.log("averageAge", averageAge);

/*problem 2.)
part a. */
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log("names", names);
let charTotal = 0;
for (let i = 0; i < names.length; i++) {
  charTotal += names[i].length;
  console.log("index", i, "charTotal", charTotal);
}
console.log("totalCharacters", charTotal);
let average = charTotal / names.length;
console.log("average", average);

/*part b. */
let allNames = "";
for (let i = 0; i < names.length; i++) {
  allNames = allNames.concat(names[i] + " ");
  console.log("allNames:", allNames);
}
console.log("allNamesConcatenated:", allNames);

/*problem 3.)*/
console.log("last element of ages array", ages[ages.length - 1]);

/*problem 4.)*/
console.log("first element of ages array", ages[0]);

/*problem 5.)*/
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
  console.log("name lenth array", nameLengths);
}

/*problem 6.)*/
let totalChars = 0;
for (let i = 0; i < nameLengths.length; i++) {
  totalChars += nameLengths[i];
  console.log("totalChars", totalChars);
}

/*problem 7.)*/
function words(word, n) {
  let concat = word.repeat(n);
  console.log(concat);
}
words("Hello", 3);

/*problem 8.)*/
function fullName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  console.log(fullName);
}
fullName("Markus", "Rolland");

/*problem 9.)*/
let numbers1 = [100, 200, 300, 400];
let numbers2 = [1, 2, 3, 4];
function numberSumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
    console.log("total", total);
  }
  if (total > 100) {
    console.log("total", total, true);
    return true;
  } else {
    console.log("total", total, false);
    return false;
  }
}
numberSumArray(numbers2);

/*problem 10.)*/
function calculateAverage(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
    console.log("total:", total);
  }
  let average = total / array.length;
  console.log("numbers average", average);
  return average;
}

calculateAverage(numbers2);

/*problem 11.)*/
let numbers3 = [33, 33, 3];
let numbers4 = [33, 33, 33];
function twoAverages(array1, array2) {
  console.log("params", array1, array2);
  let total1 = 0;
  let total2 = 0;
  for (const number of array1) {
    total1 += number;
    console.log("current loop 1", total1);
  }
  for (const number of array2) {
    total2 += number;
    console.log("current loop 2", total2);
  }
  let average1 = total1 / array1.length;
  let average2 = total2 / array2.length;
  console.log("both averages", average1, average2);
  if (average1 > average2) {
    console.log(true);
    return true;
  } else if (average1 < average2) {
    console.log(false);
    return false;
  } else {
    console.log("numbers are same");
  }
}
twoAverages(numbers3, numbers4);

/*problem 12.)*/
function willBuyDrink(isHotOutside, moneyInPocket) {
  console.log("parameters", isHotOutside, moneyInPocket);
  let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
  console.log("buy a drink?", buyDrink);
  return buyDrink;
}
willBuyDrink(true, 8);
