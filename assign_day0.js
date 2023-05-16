// 1. find the maximum element in an array


// let arr = [1,2,13,4,5,6,7];
// function maxNumber(arr){
// let maxNum=arr[0]; 
// for( let i=1; i<arr.length; i++){
//     if(arr[i]>maxNum){ 
//         maxNum = arr[i];
//         }
//     }
//     return maxNum;
// }
// console.log(maxNumber(arr));

// ========================================================================================


// 2. find the minimum element in an array

// let arr = [11,21,13,14,3,16,7];
// function minNumber(arr){
// let minNum=arr[0];
// for( let i=1; i<arr.length; i++){
//     if(arr[i]<minNum){
//         minNum = arr[i];
//         }
//     }
//     return minNum;
// }
// console.log(minNumber(arr));


// ========================================================================================

// 3. find the second largest element in an array

// let arr = [11,21,13,14,3,16,7];

// function maxNumber(arr){
// let maxNum=arr[0]; 
// for( let i=1; i<arr.length; i++){
//     if(arr[i]>maxNum){ 
//         maxNum = arr[i];
//         }
//     }
//     return maxNum;
// }
// function secLargest(arr){
//     let firstNum = maxNumber(arr);
//     let i= arr.indexOf(firstNum);
//     arr.splice(i,1);
//     return maxNumber(arr);
// }
// console.log(secLargest(arr));


//----------or----------------

// let arr = [11,21,13,14,3,16,7];
// function secLargest(arr){
//    let temp=0;
//    for(let i=0;i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]>arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
//    }
//    return arr[arr.length-2];
// }
// console.log(secLargest(arr));


// ========================================================================================

// 4. find the second smallest element in an array

// let arr = [11,21,13,14,3,16,7];
// function minNumber(arr){
// let minNum=arr[0];
// for( let i=1; i<arr.length; i++){
//     if(arr[i]<minNum){
//         minNum = arr[i];
//         }
//     }
//     return minNum;
// }
// function secSmallest(arr){
//     let firstNum = minNumber(arr);
//     let i= arr.indexOf(firstNum);
//     arr.splice(i,1);
//     return minNumber(arr);
// }
// console.log(secSmallest(arr));

// ------------or--------------

// let arr = [11,21,13,14,3,16,7];
// function secSmall(arr){
//    let temp=0;
//    for(let i=0;i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]>arr[j]){
//             temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
//    }
//    return arr[1];
// }
// console.log(secSmall(arr));


// ========================================================================================

// 5. find the sum of all elements in an array

// let arr = [11,21,13,14,3,16,7];
// function sumOfElements(arr){
// let sum=0
//     for( let i=0; i<arr.length; i++){
//          sum += arr[i];
//     }
//     return sum
// }
// console.log(sumOfElements(arr));


// ========================================================================================

// 6. find the average of all elements in an array

// let arr = [11,21,13,14,3,16,7];
// function sumOfElements(arr){
// let sum=0
//     for( let i=0; i<arr.length; i++){
//          sum += arr[i];
//     }
//     return sum
// }
// function avgOfElements(arr){
//    let sum = sumOfElements(arr);
//    let avg = (sum/arr.length);
// //    let avg = Math.round(sum/arr.length);
//    return avg;
   
// }
// console.log(avgOfElements(arr));


// ========================================================================================

// 7. find the sum of all even elements in an array

// let arr = [11,21,13,14,3,16,7];
// function sumOfEvenNum(arr){
// let sum=0
//     for( let i=0; i<arr.length; i++){
//         if(arr[i]%2===0){
//          sum += arr[i];
//         }
//     }
//     return sum
// }
// console.log(sumOfEvenNum(arr));

// ========================================================================================

// 8. find the sum of all odd elements in an array

// let arr = [11,21,13,14,3,16,7];
// function sumOfOddNum(arr){
// let sum=0
//     for( let i=0; i<arr.length; i++){
//         if(arr[i]%2!==0){
//          sum += arr[i];
//         }
//     }
//     return sum
// }
// console.log(sumOfOddNum(arr));


// ========================================================================================

// 9. find the number of even elements in an array

// let arr = [11,21,13,14,3,16,7];
// function numOfEvenNum(arr){
// let count=0
//     for( let i=0; i<arr.length; i++){
//         if(arr[i]%2===0){
//          count++
//         }
//     }
//     return count
// }
// console.log(numOfEvenNum(arr));


// ========================================================================================

// 10. find the number of odd elements in an array

// let arr = [11,21,13,14,3,16,7];
// function numOfOddNum(arr){
// let count=0;
//     for( let i=0; i<arr.length; i++){
//         if(arr[i]%2!==0){
//             count++
//         }
//     }
//     return count
// }
// console.log(numOfOddNum(arr));




