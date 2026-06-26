class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = new Map();
        let result = [];
        for(let num of nums){
            freqMap.set(num,(freqMap.get(num)||0)+1);
        }

        let bucket = Array(nums.length + 1).fill().map(()=>[]);

        for(let [num,count] of freqMap){
            bucket[count].push(num);
        }

        for(let i = bucket.length - 1;i>=0;i--){
            for(let num of bucket[i]){
                result.push(num);

                if(result.length === k) return result;
            }

        }
    }
}
