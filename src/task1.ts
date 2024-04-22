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
