var caesar = function(string, key) {

    //set alphabet to numbers
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //split string into an array of single chars
    var charArray = string.split('');
    var returnString = [];
    var regEx = /[A-Za-z]/;


    //loop through the array and apply the cypher to each letter
    for(var i = 0; i < charArray.length; i++){
        
        if(regEx.test(charArray[i])){

            var upperFlag = false;

            if(charArray[i] === charArray[i].toUpperCase()){
                upperFlag = true;
                charArray[i] = charArray[i].toLowerCase();
            }
            var index = alphabet.indexOf(charArray[i]);
            var newLetter;
            var overflow = 0;

            //Dealing with index limits
            if(key>alphabet.length){
                key = key%alphabet.length;
            }
            if (index+key<0){
                overflow = index+key
                newLetter = alphabet[(alphabet.length)+overflow];
            }else if(index+key >= alphabet.length){
                overflow = (index+key)-alphabet.length;
                newLetter = alphabet[overflow];
            }else{
                newLetter = alphabet[index+key];
            }

            if (upperFlag === true){
                newLetter = newLetter.toUpperCase();
                upperFlag = false;
            }
            returnString.push(newLetter);

        } else {
            returnString.push(charArray[i]);
        }

    }

    console.log("Return string:", returnString.join(''));

    //return the encoded string
    return returnString.join('');

    
}

//caesar("zz", 33);
//caesar("Hello, world", 1);

module.exports = caesar
