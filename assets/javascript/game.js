//initialize the variables which are going to count win and lose
var num = 0;
var count = 0;
var conuntLose = 0;
// select the images on the crystal button with 
var images =document.querySelectorAll("img");
reset = () =>{
    num =  0;
// generate random number btn 19 and 120
var compGuess = Math.floor((Math.random()*101)+19);
// assign the generated random number to pragraph with id randomSelected
$("#randomSelected").text(compGuess); 
// assign the textContent to variable a
var a = $("#randomSelected").text();
// function generating random numbers btn 1 and 12
return Math.ceil(Math.random()*12);
}
// change the value of the images to the randomly selected number by calling the above function
for(let o of images){
    o.value = crystalGuess();
    }
// during on click event add the values of each crystal and display
$("img").click(function(){
    num += this.value;
    $("#random").text(num);
    console.log(a,num);
    // check if the user wins
    if(a==num){
        win();
    }
    // check if user loses
    if(num > a){
        lose();
    }
    })

 function win() {
        count++;
        $("#win").text(count);
        $("#random").text("");
        reset();
        }
    function lose() {
        conuntLose++
        $("#random").text("");
        $("#lose").text(conuntLose);
        reset();
    }
    // this is going to run when window loads
    reset();
   