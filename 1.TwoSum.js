/**
 *  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 *  You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *  Example:
 *     Given nums = [2, 7, 11, 15], target = 9,
 *     Because nums[0] + nums[1] = 2 + 7 = 9,
 *     return [0, 1]. * 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var result = [],
        len = nums.length;
    for(var i = 0; i < len; i++){
        for(var k = i+1; k < len; k++){
            if(nums[k] + nums[i] === target){
                result.push(i,k);
                return result;
            }
        }
    }    
};


//最普通的解决方式……    
