//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nomeAmigo = inputAmigo.value;
  amigos.push(nomeAmigo);

  inputAmigo.value = "";

  let listaHTML = document.getElementById("listaAmigos");

  listaHTML.innerHTML = "";

  for (const amigo of amigos) {
    let item = document.createElement("li");
    item.textContent = amigo;

    listaHTML.appendChild(item);
  }
}

function sortearAmigo() {
  let totalAmigos = amigos.length;
  let amigoSorteado = amigos[Math.floor(Math.random() * totalAmigos)];

  let resultado = document.getElementById("resultado");
  resultado.textContent = `Seu amigo secreto é: ${amigoSorteado}`;
}

function reiniciar() {
    amigos = [];
    
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}