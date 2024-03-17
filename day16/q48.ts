/* Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
 Use the spread operator to combine these arrays into a single array sorted in ascending order, 
 then log the result.*/

let _set1: number[] = [180000, 200000, 450000];
let _set2: number[] = [230000, 450000, 560000];

let _set3: number[] = [..._set1, ..._set2]

 let sorted_result : number[] = _set3.sort((a,b) => {
    return a - b;
 });

 console.log(sorted_result);

