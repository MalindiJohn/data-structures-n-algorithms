/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    //s = add & t = egg

    //the string must have the same number of chars
    //if not return false
    if(s.length != t.length){

        return false;
    }

    const charMap = {};
    const mappedChars = new Set();

    for(let i = 0; i < s.length; i++){

        const charS = s[i];
        console.log('charS', charS);
        const charT = t[i];
        console.log('charT', charT)

        if(charS in charMap){

            console.log('charS in charMap', charMap[charS])

            if(charMap[charS] !== charT){

                return false;
            } 
        } else {

            if(mappedChars.has(charT)){

                return false;
            }

            charMap[charS] = charT;
            mappedChars.add(charT);

        }
    }

    console.log("**********char map vals***********")
    console.log(charMap);
    console.log("********** end ***********")

    console.log("********** mapped vals ***********")
    console.log(mappedChars)
    console.log("********** end ***********")

    return true;
    
};

console.log(isIsomorphic( "dog", "ass"));   //true