//   ---------------     SCRIPTS PARA 4_COLORES HTML   ------------------

let uno = document.createElement('div');
let dos = document.createElement('div');
let tres = document.createElement('div');
let cuatro = document.createElement('div');

uno.id = 'uno';
dos.id = 'dos';
tres.id = 'tres';
cuatro.id = 'cuatro';

document.body.appendChild(uno);
document.body.appendChild(dos);
document.body.appendChild(tres);
document.body.appendChild(cuatro);

uno.style.width = '200px';
uno.style.height = '200px';
uno.style.backgroundColor = 'blue';

dos.style.width = '200px';
dos.style.height = '200px';
dos.style.backgroundColor = 'red';

tres.style.width = '200px';
tres.style.height = '200px';
tres.style.backgroundColor = 'green';

cuatro.style.width = '200px';
cuatro.style.height = '200px';
cuatro.style.backgroundColor = 'yellow';


uno.addEventListener('click', function(){
    uno.style.backgroundColor = 'black';
});
dos.addEventListener('click', function(){
    dos.style.backgroundColor = 'black';
});
tres.addEventListener('click', function(){
    tres.style.backgroundColor = 'black';
});
cuatro.addEventListener('click', function(){
    cuatro.style.backgroundColor = 'black';
});
