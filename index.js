document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.botao-adicionar');
    const input = document.querySelector('.entrada-tarefa');
    const listaCompleta = document.querySelector('.lista-tarefa');

    button.addEventListener('click', adicionarTarefa);

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
});
