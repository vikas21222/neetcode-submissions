class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let setArr = new Set(nums);
        let newArr = [...setArr]
        if(newArr.length == nums.length){
            return false
        }else return true
    }
}
