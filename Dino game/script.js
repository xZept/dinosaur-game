var character =
document.getElementById("character");
var block = document.getElementById("block");
function jump() {
    if(character.classList != "animate") {
        character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var music = document.getElementById("background-music");

window.addEventListener('click', function(){
    music.play();
});

var checkDead = setInterval(function(){
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = 
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft<20 && blockLeft>0 && characterTop>=130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("Talo ka. Please try again.");
        location.reload();
    }
},10);

var timeleft = 100;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    promptNicole();
  }
  document.getElementById("progressBar").value = 100 - timeleft;
  timeleft -= 1;
}, 1000);

function promptNicole() {
    let text;
    let response = prompt("Good job! Now, will you be my valentine on this upcoming Valentine's Day?", "Yes");
    if (response.toUpperCase() == "YES" || response.toUpperCase() == "OKAY" || response.toUpperCase() == "K" || response.toUpperCase() == "SIGE" || response.toUpperCase() == "SURE") {
      alert("Okay dinner date tayo sa 14.")
      close();
    } else {
      alert("Ulitin mo yan!!!")
      close();
    }
    document.getElementById("demo").innerHTML = text;
  }
