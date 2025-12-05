export async function carregarDados() {
    try {
        const resposta = await fetch('../data/filmes.json');
        if (!resposta.ok) {
            throw new Error('Erro ao carregar dados');
        }
        return await resposta.json();
    } catch (erro) {
        console.error(erro);
        return [];
    }
}