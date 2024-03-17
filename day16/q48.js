"use strict";
/* Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
 Use the spread operator to combine these arrays into a single array sorted in ascending order,
 then log the result.*/
let _set1 = [180000, 200000, 450000];
let _set2 = [230000, 450000, 560000];
let _set3 = [..._set1, ..._set2];
let sorted_result = _set3.sort((a, b) => {
    return a - b;
});
console.log(sorted_result);
