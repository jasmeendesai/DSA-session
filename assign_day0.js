// 1. find the maximum element in an array


// let arr = [1,2,13,4,5,6,7];
// function maxNumber(arr){
// let maxNum=arr[0]; // 1
// for( let i=1; i<arr.length; i++){ //4
//     if(arr[i]>maxNum){   //2 & 1, 13 &2, 4&13 ,5 &13
//         maxNum = arr[i]; // 13 
//         }
//     }
//     return maxNum;
// }
// console.log(maxNumber(arr));

// ========================================================================================


// 2. find the minimum element in an array

// let arr = [11,21,13,14,3,16,7];
// function minNumber(arr){
// let minNum=arr[0];  // 11
// for( let i=1; i<arr.length; i++){  //i=4
//     if(arr[i]<minNum){  //21 ,11 // 13, 11 // 14, 11 //3 ,11
//         minNum = arr[i]; // 3
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
//     let firstNum = maxNumber(arr); // 21
//     let i= arr.indexOf(firstNum); 1
//     arr.splice(i,1); // [11,13,14,3,16,7]
//     return maxNumber(arr);
// }
// console.log(secLargest(arr));


//----------or----------------

// let arr = [11,21,13,14,3,16,7];//   [3,21,13,14,11,16,7] //[3,7,11,13,14,16,21] //7
// function secLargest(arr){
//    let temp=0;
//    for(let i=0;i<arr.length; i++){ // 0 , 1
//     for(let j=i+1; j<arr.length; j++){ //1 ,2,3,4,5,6,7 // 2
//         if(arr[i]>arr[j]){ // 3 ,7
//             temp = arr[i];  //11//21
//             arr[i] = arr[j]; // arr[0] = arr[4]=3// arr[1] = 13
//             arr[j] = temp;  // arr[4]=11 //arr[2]=21
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
// let minNum=arr[0]; //11
// for( let i=1; i<arr.length; i++){ //i=6
//     if(arr[i]<minNum){ // 7,3
//         minNum = arr[i]; // 3
//         }
//     }
//     return minNum; //3
// }
// function secSmallest(arr){
//     let firstNum = minNumber(arr); //3
//     let i= arr.indexOf(firstNum); //4
//     arr.splice(i,1); // [11,21,13,14,16,7]
//     return minNumber(arr);
// }
// console.log(secSmallest(arr));

// ------------or--------------

// let arr = [11,21,13,14,3,16,7]; //[11,21,13,14,3,16,7] // [3,7,11,13,14,16,21]
// function secSmall(arr){
//    let temp=0; //0
//    for(let i=0;i<arr.length; i++){ //i=1
//     for(let j=i+1; j<arr.length; j++){ //j=5;
//         if(arr[i]>arr[j]){ //11,3
//             temp = arr[i];  //11
//             arr[i] = arr[j]; //3
//             arr[j] = temp;  //11
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
// let sum=0;
//     for( let i=0; i<arr.length; i++){ //i=1;
//          sum += arr[i]; //sum =sum+arr[0]//0+11==11 +21=32
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
//     return sum//85
// }
// function avgOfElements(arr){
//    let sum = sumOfElements(arr); //85
//    let avg = (sum/arr.length);
// //    let avg = Math.round(sum/arr.length);
//    return avg;
   
// }
// console.log(avgOfElements(arr));


// ========================================================================================

// 7. find the sum of all even elements in an array

// let arr = [11,21,13,14,3,16,7];
// function sumOfEvenNum(arr){
// let sum=0; //0
//     for( let i=0; i<arr.length; i++){ //i=5
//         if(arr[i]%2===0){
//          sum += arr[i]; // sum =sum+arr[3]== 0+14 =14+16=30
//         }
//     }
//     return sum;
// }
// console.log(sumOfEvenNum(arr));

// ========================================================================================

// 8. find the sum of all odd elements in an array

// let arr = [11,21,13,14,3,16,7];
// function sumOfOddNum(arr){
// let sum=0;
//     for( let i=0; i<arr.length; i++){ //i=1
//         if(arr[i]%2!==0){
//          sum += arr[i]; //sum =sum+arr[i]==0+11=11+21=32
//         }
//     }
//     return sum
// }
// console.log(sumOfOddNum(arr));


// ========================================================================================

// 9. find the number of even elements in an array

// let arr = [11,21,13,14,3,16,7];
// function numOfEvenNum(arr){
// let count=0; //0
//     for( let i=0; i<arr.length; i++){ //i=5;
//         if(arr[i]%2===0){   //
//          count++ //2
//         }
//     }
//     return count
// }
// console.log(numOfEvenNum(arr));


// ========================================================================================

// 10. find the number of odd elements in an array

// let arr = [11,21,13,14,3,16,7];
// function numOfOddNum(arr){
// let count=0; //0
//     for( let i=0; i<arr.length; i++){ //i=2
//         if(arr[i]%2!==0){
//             count++ //3
//         }
//     }
//     return count
// }
// console.log(numOfOddNum(arr));




