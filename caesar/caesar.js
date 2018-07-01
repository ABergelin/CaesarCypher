var caesar = function(string, key) {

    //set alphabet to numbers
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //split string into an array of single chars
    var charArray = string.split('');

    var returnString = [];

    //loop through the array and apply the cypher to each letter
    for(var i = 0; i < charArray.length; i++){
        
        var upperFlag = false;

        if(charArray[i] === charArray[i].toUpperCase()){
            upperFlag = true;
            charArray[i].toLowerCase();
        }


        var index = alphabet.findIndex(charArray[i]);

        var newLetter = alphabet[index+key];

        if (upperFlag === true){
            newLetter.toUpperCase();
            upperFlag = false;
        }

        returnString.push(newLetter);

    }

    console.log("Return string:", returnString);

    //return the encoded string
    return returnString.join();

    
}

//module.exports = caesar
