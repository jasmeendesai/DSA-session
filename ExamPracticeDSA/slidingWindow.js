//https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1?utm_source=geeksforgeeks&utm_medium=article_practice_tab&utm_campaign=article_practice_tab

//Subarray with given sum

// function subArrSum(arr, n, s){
//     let left =0;
//     let right =0;
//     let currentSum = arr[0]

//     while(right<n){
//         if(currentSum===s){
//             return [left+1, right+1]
//         }
//         else if(currentSum<s){
//             right++
//             currentSum+=arr[right]
//         }
//         else{
//             currentSum -= arr[left]
//             left++
//         }
//         if(left>right){
//             right=left
//             currentSum = arr[left]
//         }

//     }
//     return [-1]

// }

// let arr =[1,2,3,7,5]
// let n = 5 
// let s = 12
// console.log(subArrSum(arr,n,s))


//==========================================================================================

//1839. Longest Substring Of All Vowels in Order
//https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/

// function subString(word){
//     if(word.length < 5){
//         return 0
//     }
//     let maxLen =0;
//     let start =0;
//     let vowel = ['a','e','i','o','u']
//     let len
//     for(let end=0; end<word.length; end++){
//         if(end>0 && word[end]<word[end-1]){
//             start =end
//         }
//         if(word[end]===vowel[vowel.length-1]){
//              len = end -start+1
//              maxLen = Math.max(maxLen, len)
//         }
//     }
//     return maxLen
// }

// let word = "aeiaaioaaaaeiiiiouuuooaauuaeiu"
// console.log(subString(word))


//===================================================================================


// 1876. Substrings of Size Three with Distinct Characters
// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/

// function distinctSub(s){
//     let count =0;
//     for(let i=0; i<s.length-3; i++){
//         let a = s[i]
//         let b= s[i+1]
//         let c = s[i+2]
//         if(a!=b && b!=c && c!=a){
//             count++
//         }
//     }
//     return count
// }

// let s = "xyzzaz"
// console.log(distinctSub(s))

//=========================================================================

//3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// function longestSubString(s){
//     let maxLength=0
//     let start=0
//     let end =0;
//     let window = new Set()

//     while(end<s.length){
//         let char = s[end]

//         if(!window.has(char)){
//             window.add(char)
//             end++
//             maxLength = Math.max(maxLength, end-start)
//         }
//         else{
//             window.delete(s[start])
//             start++
//         }

//     }
//     return maxLength
// }

// let s="abcabcbb"
// console.log(longestSubString(s))

// =============================================================================================

//https://leetcode.com/problems/max-consecutive-ones-iii/
//1004. Max Consecutive Ones III


// function maxConsecutive(nums, k){
//     let maxLength =0;
//     let map = new Map()
//     let start =0

//     for(let end=0; end<nums.length; end++){
//         let num = nums[end]
//         map.set(num, (map.get(num) || 0)+1)

//         while(map.get(0)>k && start<= end){
//             map.set(nums[start], (map.get(nums[start]) - 1))
//             start++
//         }
//         maxLength = Math.max(maxLength, end-start+1)
//     }
//     return maxLength
// }

// let nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2

// console.log(maxConsecutive(nums, k))


