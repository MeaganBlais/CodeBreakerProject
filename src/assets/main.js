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


