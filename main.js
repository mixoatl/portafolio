// Área del círculo => es PI por radioCirculoAlCuadrado

const PI = 3.1416;
 
let areaCirculo;

let radio = 4;

areaCirculo = PI * (radio * radio);
//document.write(areaCirculo);

radio = 10;

areaCirculo = PI * (radio * radio);
//document es el documento HTML al que está ligado el archivo
// el operador . me permite acceder a propiedades o métodos(acciones) del documento
//write es un método (función que le pertenece a alguien)
//document.write(areaCirculo);

/* const myModal = document.getElementById('modal-contactame');
const myElement = document.getElementById('contactame');

myModal.addEventListener('shown.bs.modal', () => {
    myElement.focus();
}); */


let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
//1000 milisegundos es 1 segundo
  .pauseFor(1000)
  .typeString('Desarrolladora Web')
  .deleteChars(20)
  .typeString('Monserrat Fernández')
  .pauseFor(300)
  .deleteChars(20)
  .start();