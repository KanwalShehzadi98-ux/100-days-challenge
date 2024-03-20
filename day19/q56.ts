/* Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.*/

let myMixArray  = ["Kanwal",20,5.2,"Mishal",16,5.6,"Aown",12,5.3];

let myStringArray  = myMixArray.filter((str) => typeof str === "string");

console.log(myStringArray);