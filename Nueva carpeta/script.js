// Array para guardar los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Evitar duplicados
  if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue agregado.");
    return;
  }

  amigos.push(nombre);
  input.value = ""; // limpiar campo
  mostrarLista();
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes ingresar al menos 2 amigos para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `🎉 El amigo secreto es: <strong>${elegido}</strong>`;
}

// 🔹 Función para reiniciar el juego con confirmación
function reiniciarJuego() {
  const confirmar = confirm("¿Seguro que deseas reiniciar el juego? Se perderán todos los nombres.");
  
  if (confirmar) {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
  }
}
