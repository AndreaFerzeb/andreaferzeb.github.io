

document.getElementById("demo").onmouseenter = function() {mouseEnter()};
document.getElementById("demo").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
  document.getElementById("demo").innerHTML = "Acerca de mí";
}

function mouseLeave() {
  document.getElementById("demo").innerHTML = "Hola";

}