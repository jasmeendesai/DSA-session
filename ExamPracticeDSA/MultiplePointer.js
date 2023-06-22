//========================================================================

//1) // https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/
//2491. Divide Players Into Teams of Equal Skill

// function skillOfTeam(skill){
//     let count = 0;
//     skill.sort((a,b) =>a-b)
//     let n = skill.length
//     let low =0;
//     let high = n-1;
//     let eachGpSum = skill[0]+skill[n-1]
//     while(low<high){
//         if(skill[low]+skill[high]==eachGpSum){
//             count += skill[low]*skill[high]
//         }else{
//             return -1
//         }
//         low++
//         high--
//     }
//     return count
// }

// let skill = [3,2,5,1,3,4]

// console.log(skillOfTeam(skill))

//=====================================================================================

//2// https://leetcode.com/problems/boats-to-save-people/
// 881. Boats to Save People


// function numberOfBoats(people, limit){
//     let count =0;
//     let left =0;
//     let right = people.length-1
//     people.sort((a,b) =>(a-b))
//     while(left<=right){
//         if(people[left]+people[right]<=limit){
//             left++
//             right--
//         }else{
//             right--
//         }
//         count++
//     }
//     return count
// }

// let people = [3,2,2,1]
// let limit = 3

// console.log(numberOfBoats(people, limit))

//================================================================================

//3 //26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// function duplicates(nums){
//     let i=0;
//     let j=1;
//     while(j<nums.length){
//         if(nums[i]!==nums[j]){
//         i++;
//         nums[i] = nums[j]
//         }
//         j++
//     }
//     return i+1
// }
// let nums = [1,1,2]

// console.log(duplicates(nums))

//========================================================================

//4)//167. Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// function twoSum(nums, target){
//     let i=0;
//     let j= nums.length-1
//     while(i<j){
//         if(nums[i]+nums[j]==target){
//             return [i+1, j+1]
//         }
//         else if(nums[i]+nums[j]>target){
//             j--
//         }
//         else i++
//     }
//     return
// }

// let nums =[2,7,11,15]
// let target = 9
// console.log(twoSum(nums,target))


//=============================================================================

//5)189. Rotate Array
//https://leetcode.com/problems/rotate-array/description/

// function rotateArr(nums,k){
// let i=0;
// let j=nums.length-1;
// while(i<j){
//     nums[i] = nums[i]+nums[j]
//     nums[j] = nums[i]-nums[j]
//     nums[i] = nums[i]-nums[j]
//     i++
//     j--
// }
// i=0; j=(k%nums.length)-1
// while(i<j){
//     nums[i] = nums[i]+nums[j]
//     nums[j] = nums[i]-nums[j]
//     nums[i] = nums[i]-nums[j]
//     i++
//     j--
// }
// i=(k%nums.length), j=nums.length-1
// while(i<j){
//     nums[i] = nums[i]+nums[j]
//     nums[j] = nums[i]-nums[j]
//     nums[i] = nums[i]-nums[j]
//     i++
//     j--
// }
// return nums
// }
// let  nums = [1,2,3,4,5,6,7]
// let k = 3

// console.log(rotateArr(nums,k))

//======================================================================

// 6)https://leetcode.com/problems/container-with-most-water/
//11. Container With Most Water

// function maxArea(height){
//     let left=0;
//     let right = height.length-1;

//     let maxArea =0;
//     while(left<right){
//         let h= Math.min(height[left],height[right])
//         let w= right-left;
//         let area = h*w
//         maxArea = Math.max(maxArea, area)

//         if(height[left]<height[right]){
//             left++
//         }else{
//             right--
//         }
//     }
//     return maxArea
// }

// let height = [1,8,6,2,5,4,8,3,7]

// console.log(maxArea(height))

//======================================================

//7)//238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/description/

// function product(nums){
//     let prefix=1
//     let postfix =1
//     let arr = new Array(nums.length).fill(1)

//     for(let i=0; i<nums.length; i++){
//         arr[i]*=prefix;
//         prefix*=nums[i]
//     }
//     for(let i=nums.length-1; i>=0; i--){
//         arr[i]*=postfix;
//         postfix*=nums[i]
//     }
//     return arr
 
// }
// let nums = [1,2,3,4]
// console.log(product(nums))

//==================================================================================

//Q1 Given two sorted arrays and a number x, find the pair whose sum is closest to x and the pair has an element from each array. 
// a).
// Input:  ar1[] = {1, 4, 5, 7};
//         ar2[] = {10, 20, 30, 40};
//         x = 32      
// Output:  1 and 30

// const closest = function (arr,arr2,x){
//     let res=[]
//     let dist=Infinity
//     let i=0,j=arr2.length-1
//     while (i<j) {
//         if(Math.abs(arr[i]+arr2[j]-x)<dist){
//             res=[arr[i],arr2[j]]
//             dist=Math.abs(arr[i]+arr2[j]-x)
//         }
//         if((arr[i]+arr2[j]-x>0)) j--
//         else i++
//     }
//     return res
// }
// let ar1 = [1, 4, 5, 7]
// let ar2 = [10, 20, 30, 40]
// let x=32
// console.log(closest(ar1,ar2,x))

//b).
// Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54

// Output: 22 and 30
// function closest(arr,x){
//     let res =[];
//     let dist =Infinity;
//     let i=0;
//     let j=arr.length-1
//     while(i<j){
//         if(Math.abs(arr[i]+arr[j]-x)<dist){
//             res = [arr[i], arr[j]]
//             dist = Math.abs(arr[i]+arr[j]-x)
//         }
//         if((arr[i]+arr[j]-x)>0){
//             j--
//         }
//         else i++
//     }
//     return res

// }

// let arr = [10, 22, 28, 29, 30, 40]
// let x=54
// console.log(closest(arr,x))

//==========================================================================

// Q2.Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.
// Input:  arr[] = {0, -1, 2, -3, 1}
// Output:  (0 -1 1), (2 -3 1)
//  Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0 

// const tripletSumZero= function(arr){           //3sum


//     let res=[]
//     arr.sort((a,b)=>a-b)
//     for(let i=0;i<arr.length-2;i++){
//         let l=i+1,r=arr.length-1
//         while(l<r){
//             sum=arr[i]+arr[l]+arr[r]        
//             if(sum==0) res.push([arr[i],arr[l],arr[r]])
//             if(sum<0) l++;
//             else r--;
//         }
//     }
//     return res
// }


//==================================================================================

//https://leetcode.com/problems/3sum/
//15. 3Sum

// function triplets(nums){
//     let res=[]
//     nums.sort((a,b) =>(a-b))
    
//     for(let i=0;i<nums.length; i++){
//         let l=i+1
//         let r=nums.length-1
//         while(l<r){
//             let sum = [nums[i]+nums[l]+nums[r]]
//             if(sum==0){
//                 let result =[nums[i],nums[l], nums[r]]
//                 res.push(result)
//                 while(nums[l+1]==nums[l])
//                 {l++}
//                 while(nums[r-1]===nums[r])
//                 {r--}
//                 l++
//                 r--
//             }
//             else if(sum>0) r--
//             else l++
//         }
//         while(nums[i+1] === nums[i]){
//             i++
//         }
//     }
//     return res
// }
// let nums = [0, -1, 2, -3, 1]
// console.log(triplets(nums))

//================================================================================

//https://leetcode.com/problems/sort-colors/
//75. Sort Colors


// function sortColors(nums){
//     let l=0
//     let m=0
//     let h=nums.length-1
//     let temp;
//     while(m<=h){
//         if(nums[m]==0){
//            temp = nums[m]
//            nums[m]=nums[l]
//            nums[l]=temp
//            l++
//            m++ 
//         }
//         else if(nums[m]==1){
//             m++
//         }
//         else if(nums[m]==2){
//             temp = nums[m]
//             nums[m]=nums[h]
//             nums[h]=temp
//             h--
           
//         }
//     }
//     return nums
// }
// let nums = [2,0,2,1,1,0]
// console.log(sortColors(nums))