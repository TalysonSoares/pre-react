let rotas = {
    'a': inicio,  //representa a function inicio criada no inicio
    'b': login,
    'c': cadastro,
    'd': config,
    'e': listar,
};



function alterarConteudo(pagina) {
    document.getElementById('conteudo').innerHTML = rotas[pagina]();
}
