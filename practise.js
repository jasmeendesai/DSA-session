// function isPalindrome(arr) {
//     // Iterate over half of the array
//     // for (let i = 0; i < arr.length / 2; i++) {
//     //   // Compare elements from the start and end
//     //   if (arr[i] !== arr[arr.length - 1 - i]) {
//     //     return false; // Elements don't match, not a palindrome
//     //   }
//     // }
//     // return true; // All elements match, it's a palindrome
//     let n = arr.length;
//     let flag =0;
//     for(let i=0; i<n/2; i++){
//         if(arr[i]!==arr[n-i-1]){
//             return "Yes"
//         }
//     }
//    return "No"
//   }
  
//   // Example usage
//   const array1 = [1, 2, 3, 2, 1];
//   console.log(isPalindrome(array1)); // Output: true
  
//   const array2 = [1, 2, 3, 4, 5];
//   console.log(isPalindrome(array2)); // Output: false


// function product(arr){
//     let product = 1;
//     for(let i=0; i<arr.length; i++){
//         product *=arr[i]
//     }
//     return product;
// }
// const array1 = [1, 2, 3, 2, 1];
//   console.log(product(array1))


// function largestGap(arr){
//     let temp =0;
//     for(let i=0; i<arr.length;i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]>arr[j]){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return (arr[arr.length-1]-arr[0])
// }
// const array1 = [11, 2, 13, 2, 11];
//   console.log(largestGap(array1))



// function rotateEl(arr,k){
//   while(k>0){
//     let last = arr.pop();
//     arr.unshift(last);
//     k--;
//   }
//   return arr;
// }
// const array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//   console.log(rotateEl(array1, 3))

//-------------------------------------------------------------

// Given an array of integers, write a program to delete the element at index K.=====

// function removeEl(arr,k){
//     arr.splice(k,1);
//     return arr;
// }
// const array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//   console.log(removeEl(array1, 3))

//================

// function numOfInversion(arr){
//     let count =0;
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[i]>arr[j]&&i<j){
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// const array1 = [ 2, 4, 1, 3, 5];
//   console.log(numOfInversion(array1))

//====================

// Count array elements that divide sum of all other elements

// function countEl(arr){
//     let sum =0;
    
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     let count =0;
//     for(let i=0; i<arr.length; i++){
//         if((sum-arr[i])%arr[i]===0){
//             count++;
//         }
//     } 
//     return count;
// }
// const array1 = [3, 10, 4, 6, 7];
// console.log(countEl(array1))

//--------------------

// Given a sorted array (with unique elements), find whether there exists an element(say X) which is exactly half of the sum of all the elements of the array including X.

// function countEl(arr){
//     let sum =0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     for(let i=0; i<arr.length; i++){
//         if(sum==(arr[i]*2)){
//             return "Yes"
//         }
//     }
//     return "No";
// }
// const array1 = [1,2,3,4];
// console.log(countEl(array1))

// --------------------------------


// Given an array A of N integers, count all the pairs (A[i], A[j]) such that i + j = A[i] + A[j] for all 0 ≤ i < j < N.

// function countEl(arr){
//     let count=0;
//    for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]+arr[j]===i+j){
//             count++
//         }
//     }
//    }
//    return count;
// }
// const array1 = [8, 4, 2, 1, 5, 4, 2, 1, 2, 3];
// console.log(countEl(array1))