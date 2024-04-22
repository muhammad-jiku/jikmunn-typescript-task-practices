"use strict";

const userInfo = [ 101, "Ema", "John", !0, , "2023" ];

function filterdArray(r, o) {
    const t = new Set(o);
    return r.filter((r => t.has(r)));
}

console.log(userInfo), userInfo[0] = 1, console.log(userInfo[0]), console.log(userInfo), 
console.log("-------------------------------");

const arr1 = [ 1, 2, 3, 33, 45, 465, 700 ], arr2 = [ 3, 946, 63, 9896, 700 ], arr3 = filterdArray(arr1, arr2);

function getProductData(r, o, t) {
    return r.filter((r => r[o] === t));
}

console.log("array 1 is..", arr1), console.log("array 2 is..", arr2), console.log("array 3 is..", arr3), 
console.log("-------------------------------");

const productsData = [ {
    id: 1,
    name: "Product 1",
    price: 250,
    category: "Category D"
}, {
    id: 2,
    name: "Product 2",
    price: 646,
    category: "Category A"
}, {
    id: 3,
    name: "Product 3",
    price: 633,
    category: "Category B"
}, {
    id: 4,
    name: "Product 1",
    price: 646,
    category: "Category C"
}, {
    id: 1,
    name: "Product 1",
    price: 10,
    category: "Category A"
}, {
    id: 2,
    name: "Product 2",
    price: 20,
    category: "Category B"
}, {
    id: 3,
    name: "Product 3",
    price: 30,
    category: "Category A"
}, {
    id: 4,
    name: "Product 4",
    price: 40,
    category: "Category C"
} ], filteredProductByPrice = getProductData(productsData, "price", 30), filteredProductByName = getProductData(productsData, "name", "Product 3"), filteredProductByCategory = getProductData(productsData, "category", "Category A");

function getProductDetails(r) {
    return r.reduce(((r, [, o, t]) => r + o * t), 0);
}

console.log("products by price....", filteredProductByPrice), console.log("products by name....", filteredProductByName), 
console.log("products by category....", filteredProductByCategory), console.log("-------------------------------");

const productDetails2 = [ [ "Product 1", 10, 10 ], [ "Product 2", 19, 10 ], [ "Product 3", 100, 5 ], [ "Product 4", 13, 10 ], [ "Product 5", 1, 100 ], [ "Product 6", 45, 5 ], [ "Product 7", 20, 6 ], [ "Product 8", 16, 6 ], [ "Product 9", 65, 5 ], [ "Product 10", 15, 1 ] ], totalCalc = getProductDetails(productDetails2);

console.log("total calculation..", totalCalc), console.log("-------------------------------");