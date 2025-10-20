import "bootstrap";
import "./style.css";

 //* no sabía si borrar esto, no lo estoy usando porque borre el rigo pero... Bueno ahí lo dejo
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


//*           0            1             2            3
let who   = ['El perro', 'Mi abuela', 'El cartero', 'Mi paloma'];
let action= ['se comió', 'se meó', 'rompió', 'se cagó'];
let what  = ['mi tarea', 'mi móvil', 'el carro'];
let when  = ['antes de clases', 'mientras dormía', 'cuando estaba en el gym', 'mientras almorzaba', 'cuando estaba rezando'];

function getRandom(anyArray) {
  const index = Math.floor(Math.random() * anyArray.length);
  return anyArray[index];
}

window.onload = function () {
  console.log("Salvado por la campana");
  const excuse = `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}.`;
  document.querySelector('#excuse').textContent = excuse; // <p id="excuse">…</p>
};


