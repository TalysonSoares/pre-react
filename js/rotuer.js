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



function alterarConteudo(pagina) {
    document.getElementById('conteudo').innerHTML = rotas[pagina]();
}
