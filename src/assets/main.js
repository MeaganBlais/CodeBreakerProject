let answer = document.getElementById('answer');
// limit attempt to 4 characters
let attempt = document.getElementById('attempt');


function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer === "" && attempt === "") {
        setHiddenFields();
    }
    if (!validateInput(input.value)) {
        return false;
    } else {
        attempt += 1;
    }
    if (getResults()) {
        setMessage("You Win! :)");
    } else if (!getResults() && attempt >= 10) {
        setMessage("You Lose! :(");
    } else {
        setMessage("Incorrect, try again.")
    }
}

function setHiddenFields () {
    let random = Math.floor(Math.random());
    while (random.toString().length < 4) {
        random = "0" + random.toString();
    }
    answer = random;
    attempt = 0;
    console.log(answer);
}

function setMessage (msg) {
    document.getElementById("message").innerHTML = msg;
}

function validateInput (input) {
    if (input.length === 4) {
        return true;
    } else {
        setMessage("Guesses must be exactly 4 characters long.")
        return false;
    }
}

function getResults(input) {
    document.getElementById("results").innerHTML = html;
    // results.innerHTML += html;

    let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
    
    for(i = 0; i < input.length; i++) {
        if(input.charAt(i) === answer.charAt(i)) {
            html += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        } else if(answer.indexOf(input.charAt(i)) > -1) {            
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '<div></div>';

    if(correct === input.length) {
        return true;
    } else {
        return false;
    }
}





