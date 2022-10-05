let rotas = {
    'a': inicio,  //representa a function inicio criada no inicio
    'b': login,
    'c': cadastro,
    'd': config,
};

function alterarConteudo(pagina) {
    document.getElementById('conteudo').innerHTML = pagina;
}
