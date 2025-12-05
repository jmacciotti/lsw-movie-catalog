export function preencherFiltroGenero(filmes, elemento) {
    const generos = [...new Set(filmes.map(f => f.genero))];
    generos.forEach(genero => {
        const option = document.createElement('option');
        option.value = genero;
        option.textContent = genero;
        elemento.appendChild(option);
    });
}

export function filtrarFilmes(filmes, termo, genero) {
    return filmes.filter(filme => {
        const matchTitulo = filme.titulo.toLowerCase().includes(termo.toLowerCase());
        const matchGenero = genero === '' || filme.genero === genero;
        return matchTitulo && matchGenero;
    });
}