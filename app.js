//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigo = document.getElementById("amigo");

let arrayAmigos = [];

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
