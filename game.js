var level=0;
userClickedPattern=[];
gamePattern=[];
buttonColours =["red", "blue", "green", "yellow" ];
function nextSequence(){
randomNumber=Math.floor(Math.random()*4);
randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
console.log("flashing :" + randomNumber)

$("."+randomChosenColour).animate({ opacity: 0.3 }, 100, function() {
  $(this).animate({ opacity: 1 }, 100);
});;
var audio=new Audio("./sounds/tom-1.mp3");
audio.play();
$("h1").text("level "+level);
level++;
userClickedPattern=[];
}


// $("div").click(function() {
//   nextSequence();
// });
 
$(".btn").on("click", function(){
// clicked(this);
 userChosenColour=this.getAttribute("id");
 userClickedPattern.push(userChosenColour);
//  console.log(userChosenColour);
 animatePress(userChosenColour);
 var audio1=new Audio("./sounds/tom-1.mp3");

checkAnswer(userClickedPattern.length-1);
audio1.play();

})


//  function clicked(element){
//  userChosenColour=element.getAttribute("id");
//  userClickedPattern.push(userChosenColour);
//  console.log(userChosenColour);
//  }


function checkAnswer(currentLevel){
 if(userClickedPattern[currentLevel]==gamePattern[currentLevel]) {console.log("success");
  if(userClickedPattern.length==gamePattern.length){
  setTimeout(nextSequence,1000);
}
 }
 else{console.log("wrong");
  var audio2= new Audio("sounds/crash.mp3");
  audio2.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over")
  } ,200);
  $("h1").text("Game Over, Press Any Key to Restart");
  startOver();
 }
}


function animatePress(currentColour){
$("#"+currentColour).addClass("pressed");
setTimeout(function(){ 
    $("."+currentColour).removeClass("pressed");
},100)
}


function startOver(){
  level=0;
  gamePattern=[];

}


$(document).on("keydown",nextSequence)
