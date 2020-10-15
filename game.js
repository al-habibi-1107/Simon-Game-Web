var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red","blue","green","yellow"];
var randomChosenColor;
var userChosenColor;


// function to track the sequence of the problem
function nextSequence(){
var randomNumber= Math.floor(Math.random()*4);
randomChosenColor=buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

$("#"+randomChosenColor).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
}

// to get and fire up function clicks
$(".btn").click(function(value){
    userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    console.log(userClickedPattern);

});

// function to play sound
function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}


