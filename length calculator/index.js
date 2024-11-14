const calculate = () =>
    {
        let word = document.getElementById("input").value

        if(word.trim() == ""){
            document.getElementById("result").innerHTML = "Please enter a word"
        }
        else if(word.trim().includes("  ")){
            document.getElementById("result").innerHTML = "The words includes more than one whitespace"
        }
        else{
            const length = word.length;
            document.getElementById("result").innerHTML = "The length of the word '" + word + "' is " + length;
        }
    } 