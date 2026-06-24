class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = [];
        let newMap = new Map();

        for(let i = 0;i <strs.length;i ++){
            let a = strs[i];
            let j = [...a].sort().join('');
            let key = `${j}`;
            if(!newMap.has(key)) {
                newMap.set(key,[]);
            }
            newMap.get(key).push(a)
            
        }

        for(let [k,v] of newMap){
            result.push(v);
        }

        return result;
    }
}
