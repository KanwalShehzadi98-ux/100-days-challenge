/* Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is 
twice its original value. */

let myList : number[] = [2,3,4,5,6,7,8,9];
let myDoubleList : number[] = myList.map((num) => num * 2);
console.log(myDoubleList);