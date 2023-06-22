//1)//242. Valid Anagram
//https://leetcode.com/problems/valid-anagram/


// function isValidAnagram(s,t){
//     if(s.length !== t.length) return false
//     let s1 = {}
//     let t1 = {}

//     for(let i=0; i<s.length; i++){
//         s1[s[i]] = (s1[s[i]] || 0)+1
//     }

//     for(let i=0; i<t.length; i++){
//         t1[t[i]] = (t1[t[i]] || 0)+1
//     }

//     for(let char in s1){
//         if(s1[char]!==t1[char]) return false
//     }
//     return true
// }

// let s= "rat"
// let t= "nagaram"
// console.log(isValidAnagram(s,t))


//====================================================================================

//2)//Top K Frequent Elements
//https://leetcode.com/problems/top-k-frequent-elements/


// function mostFrequent(num, k){
//     let obj ={}
//     for(let i=0; i<num.length; i++){
//         obj[num[i]] = (obj[num[i]] || 0)+1
//     }
//     let entries = Object.entries(obj)
//     entries.sort((a,b) =>(b[1]-a[1]))
//     let result =[]
//     for(let i=0; i<k; i++){
//         result.push(+entries[i][0])
//     }
//     return result
// }

// let num = [1,1,1,2,2,3] 
// let k = 2
// console.log(mostFrequent(num,k))


//===========================================================================


// 3)//451. Sort Characters By Frequency
// https://leetcode.com/problems/sort-characters-by-frequency/

// function sortCharacter(s){
//     let map = new Map();
//     for(let i=0; i<s.length; i++){
//         let char = map.get(s[i])
//         map.set(s[i],(char ||0)+1)
//     }
//     let keys = [...map.keys()].sort((a,b) => map.get(b)-map.get(a))

//     let str =''
//     for(let char of keys){
//         str += char.repeat(map.get(char))
//     }
//     return str
// }

// // let s="Aabb"
// let s="cccaaa"
// console.log(sortCharacter(s))

//=====================================================================


//4)//Sort an array of 0s, 1s and 2s
//https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1?utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab


// function sort012(n, arr){
//     let map = new Map();

//     for(let i=0; i<n; i++){
//         let num = map.get(arr[i]);
//         map.set(arr[i], (num ||0)+1)
//     }

//     let keys = [...map.keys()].sort((a,b)=>(a-b))

//     let result =[]
//     for(let char of keys){

//         for(let i=0; i<map.get(char); i++){
//             result.push(char)
//         }
//     }
//     return result
// }

// // let n=5
// // let arr =[0, 2, 1, 2, 0]
// let n=3
// let arr =[0, 1, 0]

// console.log(sort012(n,arr))

//===================================================================================

// 5)//Calculate the frequency of each word in the given string.
// Q :- Given a string str, the task is to find the frequency of each word in a string.
// Examples: 
// Input: str = “Success is not the key of Happiness, Happiness is the key of success”. 

//https://docs.google.com/document/d/1fkyd0G5bGNOk196h5U6c1MmKlkSWu41TtWXo6HEbiX0/edit?usp=sharing

// function frequency(str){
//     let obj ={}
//     let arr = str.split(" ")

//     for(let i=0; i<arr.length; i++){
//         arr[i]=arr[i].replace(/[^a-zA-Z0-9]/gi,"").toLowerCase()
//     }
//     for(let i=0; i<arr.length; i++){
     
//         obj[arr[i]] = (obj[arr[i]] ||0)+1
//     }
//     return obj
// }

// let str = "Success is not the key of Happiness, Happiness is the key of success"
// console.log(frequency(str))


//================================================================================

// 6)//1. Two Sum
// https://leetcode.com/problems/two-sum/

// function twoSum(nums, target){
//     let ans = new Array(2);

//     let map = new Map()
//     for(let i=0; i<nums.length; i++){
//         let compliment = target-nums[i];
//         if(map.has(compliment)){
//             ans[0] = i;
//             ans[1] = map.get(compliment)
//         }
//         map.set(nums[i], i)
//     } 
//     return ans
// }
// let nums = [2,7,11,15]
// let target = 9

// console.log(twoSum(nums,target))


//==========================================================================


//7)//1122. Relative Sort Array
//https://leetcode.com/problems/relative-sort-array/description/

// function relativeSort(arr1, arr2){
//     let countArr = new Array(1001).fill(0)

//     for(let i=0; i<arr1.length; i++){
//         countArr[arr1[i]]++
//     }

//     let indexOfSortedArr = 0;

//     for(let i=0; i<arr2.length; i++){
//         while(countArr[arr2[i]] >0){
//             arr1[indexOfSortedArr] = arr2[i];
//             countArr[arr2[i]]--
//             indexOfSortedArr++
//         }
//     }
//     for(let i=0; i<1001; i++){
//         while(countArr[i]>0){
//             arr1[indexOfSortedArr] = i;
//             countArr[i]--
//             indexOfSortedArr++
//         }
//     }
//     return arr1
// }

// let arr1 = [2,3,1,3,2,4,6,7,9,2,19]
// let arr2 = [2,1,4,3,9,6]

// console.log(relativeSort(arr1, arr2))


//=========================================================================

//8)//560. Subarray Sum Equals K
//https://leetcode.com/problems/subarray-sum-equals-k/

// function subarraySum(nums,k){
    // let count =0;
    // let prefixSum =0;
    // let map = new Map();
    // map.set(0,1)
    // for(let i=0; i<nums.length; i++){
    //     prefixSum +=nums[i]
    //     count += map.get(prefixSum-k)||0
    //     map.set(prefixSum, (map.get(prefixSum) ||0)+1)
    // }
    // return count
 
// }

// let nums = [1,1,1]
// let k = 2
// console.log(subarraySum(nums,k))

//=======================================================================

// 9)//https://leetcode.com/problems/height-checker/
//1051. Height Checker

// function heightChecker(heights){
//     let ans =0;
//     let countArr= new Array(101).fill(0)

//     for(let i=0; i<heights.length; i++){
//         countArr[heights[i]]++
//     }

//     let index =1;

//     for(let i=0; i<heights.length; i++){
//         while(countArr[index]===0){
//             index++
//         }
//         if(index!==heights[i]) {
//             ans++
//         }
//         countArr[index]--
//     }
//     return ans
// }

// let heights = [1,1,4,2,1,3]
// console.log(heightChecker(heights))


