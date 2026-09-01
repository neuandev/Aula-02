// Aula 02 — Interatividade da página de perfil

console.log("Funcionou!");

// Parte 1 — Manipulação do DOM
const nome = document.querySelector("#nome");
if (nome) {
  nome.textContent = "Olá, eu sou Neuan Sampaio!";
}

// Parte 2 — Alternância do tema claro/escuro
const botaoTema = document.querySelector("#btn-tema");

if (botaoTema) {
  botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");

    const modoEscuroAtivo = document.body.classList.contains("modo-escuro");
    botaoTema.textContent = modoEscuroAtivo ? "Modo claro" : "Modo escuro";
  });
}

// Desafio 1 — Efeito na foto
const fotoPerfil = document.querySelector(".hero-photo img");

if (fotoPerfil) {
  fotoPerfil.addEventListener("mouseover", () => {
    fotoPerfil.style.transform = "scale(1.1)";
  });

  fotoPerfil.addEventListener("mouseout", () => {
    fotoPerfil.style.transform = "scale(1)";
  });
}

// Desafio 2 — Relógio em tempo real
const relogio = document.querySelector("#relogio");

function atualizarRelogio() {
  if (!relogio) return;

  const agora = new Date();
  relogio.textContent = `Horário atual: ${agora.toLocaleTimeString("pt-BR")}`;
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
