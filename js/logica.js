// Array que guarda os contatos
class Contato {
    constructor(id, nome, telefone, email, dataNascimento, favorito) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.favorito = favorito;
    }
}

let contatos = [new Contato(0, 'Reinaldo', '62993497090', 'reinaldo@gmail.com', '1994-10-15', false)];

// Obter elementos
let id = null;
let favorito = false;
const nome = document.querySelector('#nome');
const telefone = document.querySelector('#telefone');
const email = document.querySelector('#email');
const dataNascimento = document.querySelector('#dataNascimento');
const lista = document.querySelector('#lista');
const totalContatos = document.querySelector('#totalContatos');

// Criar lista
listar = () => {
    lista.innerHTML = contatos.map(contato => {
        let li =
            `<li id="contato-${contato.id}" class="contato row justify-content-between">
            <div class="col-9 foto-nome d-flex align-items-center">
                <div class="foto"></div>
                <div class="nome">
                    <h6>${contato.nome}</h6>
                    <p>${contato.telefone} | ${contato.email} | ${contato. dataNascimento}</p>
                </div>
            </div>
            <div class="col-3 opcoes d-flex justify-content-end align-items-center">
               <!-- <span class="pr-2">
                    <img src="../img/icones/aniversario.svg" alt="aniversário">
                </span> -->
                <button type="button" class="btn" onclick="favoritar(${contato.id})">
                    <img id="favorito-${contato.id}" src="" alt="favorito">
                </button>
                <button type="button" class="btn" onclick="editar(${contato.id})">
                    <img src="../img/icones/editar.svg" alt="editar">
                </button>
                <button type="button" class="btn" onclick="excluir(${contato.id})">
                    <img src="../img/icones/excluir.svg" alt="excluir">
                </button>
            </div>
        </li>`;
        return li;
    }).join('');
    contarContatos();
    verificarFavorito();
}

identificarContato = (idContato) => {
    return contatos.find(contato => contato.id === idContato);
}

limparValores = () => {
    id = null;
    nome.value = '';
    telefone.value = '';
    email.value = '';
    dataNascimento.value = '';
    favorito = false;
}

cadastrar = () => {
    const idContato = id !== null ? id : contatos.length;
    contatos[idContato] = new Contato(idContato, nome.value, telefone.value, email.value, dataNascimento.value, favorito);
    limparValores();
    listar();
}

editar = (idContato) => {
    contato = identificarContato(idContato);
    id = contato.id;
    nome.value = contato.nome;
    telefone.value = contato.telefone;
    email.value = contato.email;
    dataNascimento.value = contato.dataNascimento;
    favorito = contato.favorito;
}

excluir = (idContato) => {
    contatos.splice(idContato, 1);
    listar();
}

favoritar = (idContato) => {
    contatos[idContato].favorito = !contatos[idContato].favorito
    listar();
};

verificarFavorito = () => {
    for (const contato of contatos) {
        if (contato.favorito) {
            document.getElementById(`favorito-${contato.id}`).src = "../img/icones/favorito-marcado.svg";
        } else {
            document.getElementById(`favorito-${contato.id}`).src = "../img/icones/favorito.svg";
        }
    }
}

contarContatos = () => {
    console.log(contatos);
    totalContatos.innerHTML = contatos.length;
}

// EXECUTA ESSAS FUNÇÕES AO TERMINAR DE CARREGAR 
listar();

