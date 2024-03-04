/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    //words length
    if(s.length != t.length){

        return false;
    }

    //loop through t
    for(i = 0; i < t.length; i++){

        console.log(i)

        //if t has a letter that is not in s
        if(s.indexOf(t[i]) == -1){

            console.log(s.indexOf(t[i]));

            return false;

        } else {
                
            //remove the letter from s
             s = s.replace(t[i], '');

        }

        console.log(s);
    }

    return true;

    //best solution
    // let map = new Array(256).fill(0);
    // for (let i = 0; i < s.length; i++) {
    //     map[s.charCodeAt(i)]++;
    // }

    // for (let i = 0; i < t.length; i++) {
    //     map[t.charCodeAt(i)]--;
    // }
    // return map.every(value => value === 0);

    
};

console.log(isAnagram("aacc", "ccac")); //true