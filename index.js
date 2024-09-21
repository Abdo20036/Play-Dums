// mouse click on button 
for(let  i=0;i<document.querySelectorAll("button").length ; i++){

    document.querySelectorAll("button")[i].addEventListener("click", function(){
         var audio = new Audio("sounds/tom-"+(i+1)+".mp3");
         audio.play();
         animation(document.querySelectorAll("button")[i].innerHTML);
    });
}
// keyboard press
document.addEventListener("keydown", function(Event){
    switch (Event.key){
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
        
        case 'i':
            var audio = new Audio("sounds/tom-5.mp3");
            audio.play();
        break;
        case 'k':
            var audio = new Audio("sounds/tom-6.mp3");
            audio.play();
        break;
        case 'l':
            var audio = new Audio("sounds/tom-7.mp3");
            audio.play();
        break;
        
    }
    animation(Event.key);
})
// this function for a little animation on each button when pressed
function animation(key){
    document.querySelector("."+key).classList.add("pressed")
    setTimeout( function (){document.querySelector("."+key).classList.remove("pressed")},200);

}
 
// function handleClick(){
// var audio = new Audio("sounds/tom-"+i+".mp3");
// audio.play();
// }