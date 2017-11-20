let answer = document.getElementById('answer');
// limit attempt to 4 characters
let attempt = document.getElementById('attempt');


function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer === "" && attempt === "") {
        setHiddenFields();
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


