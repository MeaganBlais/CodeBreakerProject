let answer = document.getElementById('answer');
// limit attempt to 4 characters
let attempt = document.getElementById('attempt');


function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here

// function setHiddenFields (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     answer = Math.floor(Math.random() * (max - min)) + min;
//     while (answer.length < 4) {

//     }
// }
// setHiddenFields(0, 9999);

function setHiddenFields () {
    let random = Math.floor(Math.random());
    while (random.toString().length < 4) {
        random = "0" + random.toString();
    }
    answer = random;
    attempt = 0;
    console.log(answer);
}
