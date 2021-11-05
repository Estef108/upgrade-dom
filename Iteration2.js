// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const body = document.querySelector('body');
const div1 = document.createElement('div');
body.appendChild(div1);

//console.log(div1);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divP = document.createElement('div');
const p1 = document.createElement('p');

divP.appendChild(p1);
body.appendChild(divP);
//console.log(divP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div6P = document.createElement('div');

for (let i = 0; i < 6; i++) {
	div6P.appendChild(document.createElement('p'));
}

body.appendChild(div6P);
//console.log(div6P);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pDinamico = document.createElement('p');
pDinamico.textContent = "Soy dinámico!";
body.appendChild(pDinamico);

//console.log(pDinamico);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const wubba = document.querySelector('h2.fn-insert-here');
wubba.textContent = 'Wubba Lubba dub dub';
//console.log(wubba);

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const lista = document.createElement('ul');

apps.forEach((app) => {
	let nombreApp = document.createElement('li');
	nombreApp.textContent = app;
	lista.appendChild(nombreApp);

})

body.appendChild(lista);

//console.log(lista);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me


// console.log(body);

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild. 

const parrafo2 = document.createElement('p');
parrafo2.textContent = "Voy en medio!";
const divInsert = document.querySelectorAll('body div.fn-insert-here');
document.body.insertBefore(parrafo2, divInsert[1]);
//console.log(divInsert);


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divInsertP = document.querySelectorAll('body div.fn-insert-here');

//console.log(divInsertP);

divInsertP.forEach(div => {
	let parrafo = document.createElement('p');
	parrafo.textContent = "Voy dentro!";
	div.appendChild(parrafo);
}
)
