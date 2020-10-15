var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red","blue","green","yellow"];
var randomChosenColor;
var userChosenColor;
var gameOn= false;
var level=0;


// function to track the sequence of the problem
function nextSequence(){
var randomNumber= Math.floor(Math.random()*4);
randomChosenColor=buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
console.log(gamePattern);

$("#"+randomChosenColor).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);

level++;
$("h1").text("Level "+level);

}

// to get and fire up function clicks
$(".btn").click(function(value){
    userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    // this paramer is used as the last element of the array userChoice
    // it is used to check if each element is same to same
    // as present in the gamePattern
    checkAnswer(userClickedPattern.length);
    

});

// function to play sound
function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

// function to animate a click
function animatePress(currentColor){
$("#"+currentColor).addClass("pressed");
setTimeout(()=>{
    $("#"+currentColor).removeClass("pressed")
},100)
}

// to start the game
$(document).keypress(
    function(){
        if(gameOn===false){
            $("h1").text("Level "+level);
            nextSequence();
            gameOn=true;
        }
    }
)

// a function to check the answer 
function checkAnswer(currentLevel){

if(userClickedPattern[currentLevel-1]===gamePattern[currentLevel-1]){
    // right answer condition
    console.log("success");
    if(currentLevel==gamePattern.length)
    setTimeout(function(){
        nextSequence();
        userClickedPattern=[];
    },1000)
    
}else{
    // wrong answer condition
    console.log("fail");
    startOver();
    // play wrong audio
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    // change the h1
    $("h1").text("Game Over , Press Any Key To Restart")
    // change the bg color to red for 200 ms
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    
    }
}


function startOver(){
    level =0;
    gamePattern=[];
    gameOn=false;
}