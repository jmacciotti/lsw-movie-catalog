export function abrirModal(filme) {
    document.getElementById('modalTitulo').textContent = filme.titulo;
    document.getElementById('modalSinopse').textContent = filme.sinopse;
    document.getElementById('modalAno').textContent = filme.ano;
    document.getElementById('modalGenero').textContent = filme.genero;
    document.getElementById('modalDiretor').textContent = filme.diretor;
    document.getElementById('modalDuracao').textContent = filme.duracao;
    document.getElementById('modalNota').textContent = filme.nota;
    document.getElementById('modalElenco').textContent = filme.elenco;
    document.getElementById('modal').style.display = 'flex';
}

export function configurarModal() {
    const modal = document.getElementById('modal');
    const fechar = document.querySelector('.fechar');

    fechar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}