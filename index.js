const button = document.querySelector('.botao-adicionar');
const input = document.querySelector('.entrada-tarefa');
const listaCompleta = document.querySelector('.lista-tarefa');

button.addEventListener('click', adicionarTarefa); //Quando clico no botão

let listaDeitens = [];

function adicionarTarefa(){
    listaDeitens.push(input.value);
    input.value = '';
    mostrarTarefa();
}

function mostrarTarefa() {
    let novaLista = '';

    listaDeitens.forEach((itemTarefa)=> {
        
        novaLista = novaLista + 
        `<li class="tarefa">
        <img src="/img/checked.svg" alt="area-de-check">
        <img src="/img/bin.svg" alt="area-de-excluir">
        <p>${itemTarefa}</p>
        </li>`
       
    });

    listaCompleta.innerHTML = novaLista;
}
