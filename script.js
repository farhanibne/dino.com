const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump(){
    if (dino.classList != "jump"){
    dino.classList.add("jump");

    setTimeout(function (){
        dino.classList.remove("jump");
    }, 300);}
}

let isalive = setInterval(function(){
    //for dinosaur
   let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

   //for cactus
   let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
   
   //for controls
   if(cactusleft <50 && cactusleft >0 && dinotop >=140 ){
       alert("GAME OVER")
   }



}, 10);

document.addEventListener("keydown", function (event) {
    jump();
} ); 
