document.addEventListener("touchstart", function() {}, true);
let goal=0;
let boal=0;
let babaYada = document.getElementById("team");
let babaYaga = document.getElementById("team22");
let munNa = document.getElementById("munna");


function baba(){
   
   goal += 1
   babaYada.textContent = goal;
}
function yaga(){
    boal+= 1
  babaYaga.textContent = boal;  

}

function laga(){
  let savedstate= goal + " - "+ boal + " / "
    munNa.textContent += savedstate
    
    babaYada.textContent = 0;
    babaYaga.textContent = 0;
    boal=0
    goal=0
} 

