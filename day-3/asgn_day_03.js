// question 1. Move all zeroes to end of array

// let arr = [1, 2, 0, 4, 3, 0, 5, 0];
// Output : arr[] = {1, 2, 4, 3, 5, 0, 0, 0};

// [1, 2, 0, -4, 3, 0, -5, 0];
// [1.1, 2.4, 0, 0.5, 3.6, 0.5, 6.5, 0];

// Method 1 - pushing the zero in the end of array
// let arr = [2,4,3,0,8,0,0,1]
// function pushZero(arr) {
//   let count = 0; // Count of zero elements
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count++;
//     }
//   }

//   let arr1 = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr1.push(arr[i]);
//     }
//   }

//   while (count--) {
//     arr1.push(0);
//   }

//   return arr1;
// }

// console.log(pushZero(arr));


//===============================================================


// let arr = [1, 2, 0, 4, 3, 0, 5, 0];
// let arr = [1, 2, 0, -4, 3, 0, -5, 0];
// let arr = [1.1, 2.4, 0, 0.5, 3.6, 0.5, 6.5, 0];

// function pushZero(arr) {
   
//     for( let i=0; i<arr.length; i++){//i=6
//         if(arr[i]==0){  //
//             let zero =arr.splice(i,1);
//             arr.push(zero.join(" "));
//             // arr.splice(i,1);  // [2,4,3,8,0,1,0]
//             // arr.push(0);    //[2,4,3,8,0,1,0,0]
//         }
       
//     }
//    return arr;
// }
// console.log(pushZero(arr));


//==========================================================================================

// question 2. Segregate even and odd numbers

// Input: arr[] = 1 9 5 3 2 6 7 11
// Output: 2 6 5 3 1 9 7 11

// Input: arr[] = [1, 3 ,2, 4, 7, 6, 9, 10]
// Output:  2 4 6 10 7 1 9 3

// let arr =[1, 9, 5, 3, 2, 6, 7, 11]
// let arr = [1, 3 ,2, 4, 7, 6, 9, 10]
// function segregateEl(arr) {
//     let arr1=[];
//     let arr2=[];
//    for(let i=0; i< arr.length; i++){
//     if(arr[i]%2===0){
//        arr1.push(arr[i])
//     }
//     else arr2.push(arr[i]);
//    }
//    arr = arr1.concat(arr2);
//     return arr;   
// }
// console.log(segregateEl(arr));


// =====================================================================

// question 3. Find the largest three distinct elements in an array

// Input: arr[] = [10, 4, 3, 50, 23, 90]
// Output: 90, 50, 23
let arr = [10, 4, 3, 50, 23, 90]
function threeLargest(arr){
   let temp=0;
   for(let i=0;i<arr.length; i++){ // 0 , 1
    for(let j=i+1; j<arr.length; j++){ //1 ,2,3,4,5,6,7 // 2
        if(arr[i]>arr[j]){ // 3 ,7
            temp = arr[i];  //11//21 
            arr[i] = arr[j]; // arr[0] = arr[4]=3// arr[1] = 13
            arr[j] = temp;  // arr[4]=11 //arr[2]=21
        }
    }
   }
   let a=arr.length
   arr = [arr[a-1],arr[a-2],arr[a-3]]
   return arr;
}
console.log(threeLargest(arr));

