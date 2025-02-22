//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigo = document.getElementById("amigo");

let arrayAmigos = [];

document.addEventListener("keypress", (e) => {
  if (e.code == "Enter") {
    adicionarAmigo();
  }
});

function adicionarAmigo() {
  if (amigo.value == "") {
    return alert("Digite um nome válido");
  }

  atualizarLista(amigo.value);

  amigo.value = "";
}

function atualizarLista(amigo) {
  let listaAmigos = document.getElementById("listaAmigos");
  let li = document.createElement("LI");
  li.innerHTML = amigo;
  listaAmigos.appendChild(li);
  arrayAmigos.push(amigo);
}

function sortearAmigo() {
  if (arrayAmigos.length <= 0) {
    return alert("A lista de amigos está vazia!");
  }

  let posicao = Math.floor(Math.random() * (arrayAmigos.length - 0) + 0);
  let amigoSorteado = arrayAmigos[posicao];

  document.getElementById(
    "resultado"
  ).innerText = `O amigo secreto sorteado é: ${amigoSorteado}`;

  contarSorteio();
}

function contarSorteio() {
  let contador = document.getElementById("contador");
  contador.innerText = parseInt(contador.innerText) + 1;
}
