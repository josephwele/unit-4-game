// initialize the variables which are going to count win and lose
var num = 0
var count = 0
var conuntLose = 0
var a
    // select the images on the crystal button with
var images = document.querySelectorAll('img')
    // window onload
window.onload = () => {
    reset()
}
reset = () => {
    num = 0
        // generate random number btn 19 and 120
    var compGuess = Math.floor((Math.random() * 101) + 19)
        // assign the generated random number to pragraph with id randomSelected
    document.getElementById('randomSelected').innerHTML = compGuess
        // assign the textContent to variable a
    a = document.getElementById('randomSelected').textContent
        // function generating random numbers btn 1 and 12
    var crystalGuess = () => {
            return Math.ceil(Math.random() * 12)
        }
        // change the value of the images to the randomly selected number by calling the above function
    for (let o of images) {
        o.value = crystalGuess()
    }
}

// during on click event add the values of each crystal and display
for (let o of images) {
    o.addEventListener('click', function() {
        num += this.value
        document.getElementById('random').textContent = num
            // check if the user wins
        if (a == num) {
            win()
        }
        // check if user loses
        if (num > a) {
            lose()
        }
        return false
    })
}

function win() {
    num == 0
    count++
    document.getElementById('win').innerHTML = count
    document.getElementById('random').innerHTML = ' '
    reset()
}

function lose() {
    num == 0
    conuntLose++
    document.getElementById('random').innerHTML = ' '
    document.getElementById('lose').innerHTML = conuntLose
    reset()
}