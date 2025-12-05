import { carregarDados } from './carregarDados.js';
import { preencherFiltroGenero, filtrarFilmes } from './filtros.js';
import { abrirModal, configurarModal } from './modal.js';
import { criarElementoFilme } from './utils.js';

document.addEventListener('DOMContentLoaded', async function() {
    const catalogo = document.getElementById('catalogo');
    const buscarInput = document.getElementById('buscar');
    const filtroGenero = document.getElementById('filtroGenero');
    const btnBuscar = document.getElementById('btnBuscar');
    let filmes = [];

    filmes = await carregarDados();
    exibirFilmes(filmes);
    preencherFiltroGenero(filmes, filtroGenero);
    configurarModal();

    function exibirFilmes(lista) {
        catalogo.innerHTML = '';
        lista.forEach(filme => {
            const filmeElemento = criarElementoFilme(filme);
            const botao = filmeElemento.querySelector('button');
            botao.addEventListener('click', () => {
                const filmeSelecionado = filmes.find(f => f.id === filme.id);
                if (filmeSelecionado) {
                    abrirModal(filmeSelecionado);
                }
            });
            catalogo.appendChild(filmeElemento);
        });
    }

    btnBuscar.addEventListener('click', function() {
        const termo = buscarInput.value;
        const generoSelecionado = filtroGenero.value;
        const filtrados = filtrarFilmes(filmes, termo, generoSelecionado);
        exibirFilmes(filtrados);
    });

    buscarInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            btnBuscar.click();
        }
    });
});