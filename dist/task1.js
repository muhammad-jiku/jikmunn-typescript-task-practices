"use strict";
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
function getProductData(arr, criterion, value) {
    return arr.filter((x) => x[criterion] === value);
}
const productsData = [
    { id: 1, name: 'Product 1', price: 250, category: 'Category D' },
    { id: 2, name: 'Product 2', price: 646, category: 'Category A' },
    { id: 3, name: 'Product 3', price: 633, category: 'Category B' },
    { id: 4, name: 'Product 1', price: 646, category: 'Category C' },
    { id: 1, name: 'Product 1', price: 10, category: 'Category A' },
    { id: 2, name: 'Product 2', price: 20, category: 'Category B' },
    { id: 3, name: 'Product 3', price: 30, category: 'Category A' },
    { id: 4, name: 'Product 4', price: 40, category: 'Category C' },
];
const filteredProductByPrice = getProductData(productsData, 'price', 30);
const filteredProductByName = getProductData(productsData, 'name', 'Product 3');
const filteredProductByCategory = getProductData(productsData, 'category', 'Category A');
console.log('products by price....', filteredProductByPrice);
console.log('products by name....', filteredProductByName);
console.log('products by category....', filteredProductByCategory);
console.log('-------------------------------');
function getProductDetails(arr) {
    const result = arr.reduce((total, [, price, quantity]) => total + price * quantity, 0);
    return result;
}
const productDetails2 = [
    ['Product 1', 10, 10],
    ['Product 2', 19, 10],
    ['Product 3', 100, 5],
    ['Product 4', 13, 10],
    ['Product 5', 1, 100],
    ['Product 6', 45, 5],
    ['Product 7', 20, 6],
    ['Product 8', 16, 6],
    ['Product 9', 65, 5],
    ['Product 10', 15, 1],
];
const totalCalc = getProductDetails(productDetails2);
console.log('total calculation..', totalCalc);
console.log('-------------------------------');
