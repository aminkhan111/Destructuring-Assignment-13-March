// 02. Only unique items are allowed.

function uniqueElements(inputarray){

   unique = new Set(inputarray);

   return unique;
}


inputarray=[1,2,3,4,5,5,5,5,8,8,8,6,6,7,1,2,]
const resultarr = uniqueElements(inputarray);

console.log(resultarr);


// // You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.

// function uniqueElements(arr) {
//     return new Set(arr);
//   }
  
//   console.log(uniqueElements([1, 2, 2, 3, 3, 4])); // Set { 1, 2, 3, 4 }
//   console.log(uniqueElements([5, 6, 7, 7, 8, 8])); // Set { 5, 6, 7, 8 }

////////////////////////////////////-----------------///////////////////

// function removeDuplicates(inputArray) {
//     const uniqueSet = new Set(inputArray);
//     const uniqueArray = [...uniqueSet];
//     return uniqueArray;
//   }
  
//   // Example usage:
//   const inputArray = [1, 2, 3, 4, 5, 6, 2, 3, 4, 1, 12, 12];
//   const resultArray = removeDuplicates(inputArray);
//   console.log(resultArray);
  



