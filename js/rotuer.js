import inicio from "./inicio.js";
import login from "./login.js";
import cadastro from "./cadastro.js";
import config from "./config.js";
import listar from "./listar.js";

let rotas = {
    'a': inicio,  //representa a function inicio criada no inicio
    'b': login,
    'c': cadastro,
    'd': config,
    'e': listar,
};



document.querySelectorAll('[data-action="menu"]').forEach((botao) => {
    botao.addEventListener('click', () => {
        let pagina = botao.getAttribute('data-page');

        document.getElementById('conteudo').innerHTML = rotas[pagina]();
    })
})

/*function alterarConteudo(pagina) {
    document.getElementById('conteudo').innerHTML = rotas[pagina]();
}*/
