//Day 6 : Arrays

//Task/Activities:

//Activity 1 : Array Creation and Access

//Task 1:Create an array of numbers from 1 to 5 and log the array to the console.

const arr = [1, 2, 3, 4, 5];

console.log("Array:", arr);

//Task 2: Access the first and last elements of the array log them to the console.

const firstElOfArr = arr[0];
const lastElOfArr = arr[arr.length - 1];

console.log(
  `First Element of an Array: ${firstElOfArr}\nLast Element of an Array: ${lastElOfArr}`
);

//Activity 2: Array Methods (Basic)

//Task 3 :Use the push method to add a new number to the of the array and log the updated array.

const addElInArrlast = arr.push(6);
console.log(`Added new Element ${addElInArrlast} in Last of an Array`);
console.log(arr);

//Task 4: Use the pop method to remove the last element from the array anf log the updated array.

const removeElFromArr = arr.pop();
console.log(`Remove an Last Element ${removeElFromArr} from`);
console.log(arr);

//Task 5 : Uses the shift method to remove the first element from the array and log the updated array

const removeFirstElFromArr = arr.shift();
console.log(`Remove an First Element ${removeFirstElFromArr} from`);
console.log(arr);

//Task 6: Use the unshift method to add a new number to the behinning of the array and log the updated array.

const addElInArrFirst = arr.unshift(1);
console.log("Added a new Elemennt 1 in Starting of an Array");
console.log(arr);

//Activity 3: Array Methods (Intermediate)

//Task 7: Use the map method to create a new array where each number is doubled and log the new array,

const doubleArrayUsingMap = arr.map((num) => {
  return num * num;
});
console.log("Double the Array using Array");
console.log(doubleArrayUsingMap);

//Task 8:  Use athe filter method to create a new array with only even numbers and log the new array.

const filterEvenNum = arr.filter((num) => num % 2 === 0);
console.log("Filter out Even Numbers:");
console.log(filterEvenNum);

//Task 9 : Usw the reduce method to calculate the sum of all numbers in the array and log the result.

const sumOfNumUsingReduce = arr.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of Numbers in an Array using Reduce: ${sumOfNumUsingReduce}`);

//Activity 4: Array Iteration

//Task 10: Use a for loop to iterate over the array and log each element to the console.

console.log("Iterate over the array using for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Task 11: Use the forEach method to iterate over the array and log each element to thw console.

console.log("Iterate over the array using foreach");
arr.forEach((num) => {
  console.log(num);
});

//Activity 5: Multi-dimensional Arrays

//Task 12: Create a two-dimensional array(matrix) and logthe entire array to the console.

const twoDimArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Two dimensional Array are:");
console.log(twoDimArr);

//Task 13: Access and log a specific element from the two-dimensional array.

const accessFirstElOfFirstRow = twoDimArr[0][0];
console.log(`First Element of First Row is : ${accessFirstElOfFirstRow}`);

const accessLastElOfLastRow = twoDimArr[2][2];
console.log(`Last Element of Last Row is : ${accessLastElOfLastRow}`);

const accessFirstElOfLastRow = twoDimArr[2][0];
console.log(`First Element of Last Row is : ${accessFirstElOfLastRow}`);

const accessMiddleElOfMiddleRow = twoDimArr[1][1];
console.log(`middle Element of Middle Row is : ${accessMiddleElOfMiddleRow}`);
