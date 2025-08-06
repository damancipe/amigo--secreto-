// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = ["Daniel","Laura","Mateo","Sara"];
function agregarAmigo() {
  const input = document.getElementById("nombre");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = ""; // limpia el campo
  actualizarLista();
}
function actualizarLista() {
  const lista = document.getElementById("lista-amigos");
  lista.innerHTML = "";

  for (let amigo of amigos) {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  }
}
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const nombreSorteado = amigos[indice];

  document.getElementById("resultado").innerHTML = `🎉 El amigo secreto es: <strong>${nombreSorteado}</strong>`;
}

