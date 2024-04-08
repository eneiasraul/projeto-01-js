document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.botao-adicionar');
    const input = document.querySelector('.entrada-tarefa');
    const listaCompleta = document.querySelector('.lista-tarefa');
    const botaoConcluidos = document.querySelector('#botao-concluidos');
    const botaoPendentes = document.querySelector('#botao-pendentes');

    button.addEventListener('click', adicionarTarefa);
    botaoConcluidos.addEventListener('click', mostrarConcluidos);
    botaoPendentes.addEventListener('click', mostrarPendentes);

    let listaDeItens = [];

    function adicionarTarefa() {
        listaDeItens.push({
            tarefa: input.value,
            concluida: false
        });

        input.value = '';

        mostrarTarefa();
    }

    function mostrarTarefa() {
        let novaLista = '';

        listaDeItens.forEach((item, posicao) => {

            novaLista = novaLista +
                `<li class="tarefa ${item.concluida && "feito"}">
                    <img src="img/checked.svg" alt="area-de-check">
                    <img src="img/bin.svg" alt="area-de-excluir">
                    <p>${item.tarefa}</p>
                </li>`

        });

        listaCompleta.innerHTML = novaLista;

        document.querySelectorAll('.tarefa img:first-child').forEach((img, posicao) => {
            img.addEventListener('click', function() {
                tarefaFeita(posicao);
            });
        });

        document.querySelectorAll('.tarefa img:nth-child(2)').forEach((img, posicao) => {
            img.addEventListener('click', function() {
                excluirItem(posicao);
            });
        });
    }

    function tarefaFeita(posicao) {
        listaDeItens[posicao].concluida = !listaDeItens[posicao].concluida;
        mostrarTarefa();
    }

    function excluirItem(posicao) {
        listaDeItens.splice(posicao, 1);
        mostrarTarefa();
    }

    function mostrarConcluidos() {
        const tarefasConcluidas = listaDeItens.filter(item => item.concluida);

        listaCompleta.innerHTML = '';

        tarefasConcluidas.forEach((item, posicao) => {
            listaCompleta.innerHTML += 
                `<li class="tarefa feito">
                    <img src="img/checked.svg" alt="area-de-check">
                    <img src="img/bin.svg" alt="area-de-excluir">
                    <p>${item.tarefa}</p>
                </li>`;
        });
    }

    function mostrarPendentes() {
        const tarefasPendentes = listaDeItens.filter(item => !item.concluida);

        listaCompleta.innerHTML = '';

        tarefasPendentes.forEach((item, posicao) => {
            listaCompleta.innerHTML += 
                `<li class="tarefa">
                    <img src="img/checked.svg" alt="area-de-check">
                    <img src="img/bin.svg" alt="area-de-excluir">
                    <p>${item.tarefa}</p>
                </li>`;
        });
    }
});
