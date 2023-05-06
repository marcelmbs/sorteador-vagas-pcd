let vagas = ['16', '17', '22', '23'];
let vagasSelecionadas = [];
let aptosDisponiveis = ['31', '43', '62', '101'];

document.addEventListener(
  "keypress",
  function (e) {
    if (e.which == 13) {
      sortearVaga();
    }
  },
  false
);

function sortearVaga() {
  let vaga = document.getElementById("idVaga").value;

  if (vaga != '16' && vaga != '17' && vaga != '22' && vaga != '23'){
    buildMensagem("erro", "Insira somente as vagas PCD para este sorteio.");
    return;
  } else if (aptosDisponiveis.length <= 0) {
    buildMensagem("erro", "Todos os apartamentos já foram sorteados!");
    return;
  } else if (vagasSelecionadas.indexOf(vaga) != -1) {
    buildMensagem("erro", `A vaga ${vaga} já foi sorteada!`);
    return;
  }

  let aptoSorteado = "";
  aptoSorteado = aptosDisponiveis[Math.floor(Math.random() * aptosDisponiveis.length)];

  aptosDisponiveis.splice(aptosDisponiveis.indexOf(aptoSorteado), 1);

  vagasSelecionadas.push(vaga);
  document.getElementById("idVaga").value = "";
  buildMensagem(
    "sucesso",
    `O apartamento sorteado para a vaga ${vaga} é o apartamento ${aptoSorteado}`
  );

  addToGrid(vaga, aptoSorteado);
}

function addToGrid(vaga, apartamento) {
  let bodyGrid = document.getElementById("bodyGrid");
  let row = `<tr><td>${vaga}</td><td>${apartamento}</td></tr>`;
  bodyGrid.innerHTML += row;
}

function buildMensagem(tipo, mensagem) {
  let objmensagem = document.getElementById("mensagem");
  objmensagem.innerHTML = mensagem;

  if (tipo == "erro") objmensagem.style.color = "red";
  else objmensagem.style.color = "green";

  setTimeout(() => {
    objmensagem.innerHTML = "";
  }, 4000);
}
