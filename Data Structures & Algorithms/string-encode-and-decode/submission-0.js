class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result ='';
        for(let i = 0;i<strs.length;i++){
            let str = strs[i];
            let m = str.length;
            result += `${m}#${str}`
        }
        console.log(result);
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i =0;
        let result = [];
        while(i<str.length){
            let j = i;
            let len =[];
            while(str[j]!='#'){
                len.push(str[j]);
                j++
            }
            let wLen = parseInt(len.join(''));
            let word =[];
            for(let k=j+1;k<j+wLen+1;k++){
                word.push(str[k]);
            }
            
            i =j+1+wLen;
            result.push([...word].join(''))
        }
        console.log(result);
        return result;
    }
}
