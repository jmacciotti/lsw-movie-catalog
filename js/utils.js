export function criarElementoFilme(filme) {
    const filmeDiv = document.createElement('div');
    filmeDiv.className = 'filme';
    filmeDiv.innerHTML = `
        <img src="${filme.capa}" alt="${filme.titulo}">
        <div class="filme-info">
            <h3>${filme.titulo} (${filme.ano})</h3>
            <p><strong>Gênero:</strong> ${filme.genero}</p>
            <p><strong>Diretor:</strong> ${filme.diretor}</p>
            <button data-id="${filme.id}">Ver Sinopse</button>
        </div>
    `;
    return filmeDiv;
}