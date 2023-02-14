let contagem = document.body.children;
console.log(`Existem: ${contagem.length} elementos filhos no body.`);


let verifica = (paragrafos) => { 
    if (paragrafos > 5) {
        console.log(true);
    } else {
        console.log(false);
    }
}
verifica(contagem.length);

let listadosP = document.querySelectorAll('p');
console.log(listadosP);