const a = '#ffc0cb'
const s = '#f97a09'
const d = '#86d2f6'

let div1 = document.createElement('div');
div1.id = 'key';

let div2 = document.createElement('div');
div2.id = 'key2';

let div3 = document.createElement('div');
div2.id = 'key3';

let div4 = document.createElement('div');
div2.id = 'key4';



document.body.appendChild(div1);

div1.style.width = '200px';
div1.style.height = '200px';
div1.style.backgroundColor = 'white';
div1.style.border = '5px solid black';


div2.style.width = '200px';
div2.style.height = '200px';
div2.style.backgroundColor = '#990d83';
div2.style.border = '5px solid black';

div3.style.width = '200px';
div3.style.height = '200px';
div3.style.backgroundColor = '#8f8f8f';
div3.style.border = '5px solid black';

div4.style.width = '200px';
div4.style.height = '200px';
div4.style.backgroundColor = '#6f2d04 ';
div4.style.border = '5px solid black';


function cambiarColor(e){
    if (e.key === 'a' || e.key === 'A'){
        div1.style.backgroundColor = a;
    } else if (e.key === 's' || e.key === 'S'){
        div1.style.backgroundColor = s;
    } else if (e.key === 'd' || e.key === 'D' ){
        div1.style.backgroundColor = d;
    }else if (e.key === 'q' || e.key === 'Q' ){
        document.body.appendChild(div2);    
    }else if (e.key === 'w' || e.key === 'W' ){
        document.body.appendChild(div3);    
    }else if (e.key === 'e' || e.key === 'E'){
        document.body.appendChild(div4);    
    }

};

document.addEventListener('keydown', cambiarColor);

