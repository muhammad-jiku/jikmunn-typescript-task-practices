"use strict";
//  1. Convert the following JavaScript array into a TypeScript tuple. const userInfo = [101, "Ema", "John",true, , "2023"];
const userInfo = [
    101,
    'Ema',
    'John',
    true,
    ,
    '2023',
];
console.log(userInfo);
userInfo[0] = 1;
console.log(userInfo[0]);
console.log(userInfo);
console.log('-------------------------------');
// 2. Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.
// For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.
// The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.
function filterdArray(a1, a2) {
    const a2Mirror = new Set(a2);
    const newArr = a1.filter((x) => a2Mirror.has(x));
    return newArr;
}
const arr1 = [1, 2, 3, 33, 45, 465, 700];
const arr2 = [3, 946, 63, 9896, 700];
const arr3 = filterdArray(arr1, arr2);
console.log('array 1 is..', arr1);
console.log('array 2 is..', arr2);
console.log('array 3 is..', arr3);
console.log('-------------------------------');
