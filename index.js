
var loop = document.querySelectorAll(".drum").length;

for (var i=0 ; i<loop ; i++){

    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
    function handleClick(){
        
        var buttonInnerHTML = this.innerHTML;

        //if w image is clicked
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        
       
    } 

}

//if any key is pressed from the keyboard for example w
//this is applied to entire web page instead of some button
document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);

})

//case w will get executed
function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
                
    
        default:
            break;
    }


}

function buttonAnimation(current){
    var activeButton = document.querySelector("."+current);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

}




