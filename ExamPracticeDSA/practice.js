// // 16. 3Sum Closest
// // https://leetcode.com/problems/3sum-closest/

// function closest(nums, target){
//     nums.sort((a,b) => (a-b))

//     let closestSum =Infinity;

//     for(let i=0; i<nums.length; i++){
//         let left = i+1
//         let right = nums.length-1
//         while(left<right){
//             let sum = nums[i]+nums[left]+nums[right]

//             if(Math.abs(sum-target)<Math.abs(closestSum-target)){

//                 closestSum= sum
//             }
//             if(sum>target){
//                 right--
//             }
//             if(sum<target) left++
//             else return sum
//         }
//     }
//     return closestSum
// }

// let nums = [-1,2,1,-4], target = 1
// console.log(closest(nums, target))


//===========================================


// Input: s = "cbaebabacd", p = "abc"

function anagram(s,p){

    let map = new Map();

    for(let i=0; i<p.length; i++){
        let char = p[i]
        map.set(char, (map.get(char)||0)+1)
    }

    let left=0
    let right=0
    
    let result = []
    while(right<s.length){
        let char = s[right]
       if(map.has(char) && map.get(char)==1 && right+left-1==map.size){
            result.push(right)
            left++
            right++
            
        }
        else if(map.get(char)>1){
            map.set(s[left],(map.get(s[left])-1))
            left++
        }
        else{
            right++
        }

        // right++
    }
    return result
}

let s = "cbaebabacd", p = "abc"

console.log(anagram(s,p))
