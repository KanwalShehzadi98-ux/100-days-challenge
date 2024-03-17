/* Q48 - Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops.
 Use the spread operator to combine these arrays into a single array sorted in ascending order,
 then log the result.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _set1 = [180000, 200000, 450000];
var _set2 = [230000, 450000, 560000];
var _set3 = __spreadArray(__spreadArray([], _set1, true), _set2, true);
var sorted_result = _set3.sort(function (a, b) {
    return a - b;
});
console.log(sorted_result);
