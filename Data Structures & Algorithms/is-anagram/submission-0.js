class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let str1 = [...s].sort().join('');
        let str2 = [...t].sort().join('');

        if(s.length!==t.length) return false;
        console.log(str1);

        if(str1===str2){
            return true;
        }else{
            return false;
        }

    }
}
