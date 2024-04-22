//  1. Convert the following JavaScript array into a TypeScript tuple. const userInfo = [101, "Ema", "John",true, , "2023"];

const userInfo: [number, string, string, boolean, undefined, string] = [
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

console.log(
  '------------------------------------------------------------------------------------------------------------'
);

// 2. Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

// For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.

// The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.

function filterdArray(a1: number[], a2: number[]): number[] {
  const a2Mirror = new Set(a2);
  const newArr = a1.filter((x) => a2Mirror.has(x));

  return newArr;
}

const arr1: number[] = [1, 2, 3, 33, 45, 465, 700];
const arr2: number[] = [3, 946, 63, 9896, 700];

const arr3 = filterdArray(arr1, arr2);
console.log('array 1 is..', arr1);
console.log('array 2 is..', arr2);
console.log('array 3 is..', arr3);

console.log(
  '------------------------------------------------------------------------------------------------------------'
);

// 3. You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

interface Product {
  id: number;
  name?: string;
  price: number;
  category: string;
}

function getProductData<T>(
  arr: T[],
  criterion: keyof T,
  value: T[keyof T]
): T[] {
  return arr.filter((x) => x[criterion] === value);
}

const productsData: Product[] = [
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
const filteredProductByCategory = getProductData(
  productsData,
  'category',
  'Category A'
);
console.log('products by price....', filteredProductByPrice);
console.log('products by name....', filteredProductByName);
console.log('products by category....', filteredProductByCategory);

console.log(
  '------------------------------------------------------------------------------------------------------------'
);

// 4. Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type Product2 = [string, number, number];

function getProductDetails(arr: Product2[]): number {
  const result = arr.reduce(
    (total, [, price, quantity]) => total + price * quantity,
    0
  );

  return result;
}
const productDetails2: Product2[] = [
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

console.log(
  '------------------------------------------------------------------------------------------------------------'
);

// 5. Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?

function calculatesSum(arr: number[]): number {
  const newArr = arr.filter((x) => x % 2 === 0);

  const result = newArr.reduce((sum, x) => sum + x, 0);

  return result;
}

const numbersOfArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const totalSum = calculatesSum(numbersOfArray);
console.log('Sum of even numbers is..', totalSum);

console.log(
  '------------------------------------------------------------------------------------------------------------'
);

// 6. Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface Person {
  name: string;
  age: number;
  email: string;
}

function findPerson(arr: Person[], mail: string): Person | null {
  const result = arr.find((p) => p.email === mail);

  return result || null;
}

const persons: Person[] = [
  { name: 'Jiku', age: 25, email: 'jika@gmail.com' },
  { name: 'Munira', age: 25, email: 'munira@gmail.com' },
  { name: 'MAHJIKU', age: 25, email: 'muhammadjiku364@gmail.com' },
  { name: 'Munira', age: 25, email: 'munira@gmailinctg.com' },
  { name: 'Irham', age: 2, email: 'irham@gmail.com' },
];

const checkPerson1 = findPerson(persons, 'jika@gmail.com');
const checkPerson2 = findPerson(persons, 'muhammadjiku64@gmail.com');
const checkPerson3 = findPerson(persons, 'muhammadjiku364@gmail.com');
console.log(checkPerson1);
console.log(checkPerson2);
console.log(checkPerson3);

console.log(
  '------------------------------------------------------------------------------------------------------------'
);
