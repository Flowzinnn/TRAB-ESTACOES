const mes = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

const estacao_ano = ["primavera", "verão", "outono", "inverno"];

const primavera = [
  { "nome": "Rosa chá", "cor": "rgb(255, 182, 193)" },
  { "nome": "Lilás", "cor": "rgb(200, 162, 200)" },
  { "nome": "Verde menta", "cor": "rgb(152, 255, 152)" },
  { "nome": "Amarelo limão", "cor": "rgb(255, 250, 85)" },
  { "nome": "Peônia", "cor": "rgb(255, 105, 180)" }
];

const verao = [
    { nome: 'Turquesa', cor: 'rgb(64, 224, 208)' },
    { nome: 'Verde limão', cor: 'rgb(173, 255, 47)' },
    { nome: 'Amarelo ouro', cor: 'rgb(255, 223, 0)' },
    { nome: 'Laranja pastel', cor: 'rgb(255, 179, 71)' },
    { nome: 'Coral', cor: 'rgb(255, 127, 80)' }    
];

  
const outono = [
    { nome: 'Amarelo suave', cor: 'rgb(255, 239, 184)' },
    { nome: 'Bege claro', cor: 'rgb(210, 180, 140)' },
    { nome: 'Pêssego suave', cor: 'rgb(255, 218, 185)' },
    { nome: 'Marrom claro', cor: 'rgb(222, 184, 135)' },
    { nome: 'Laranja pastel', cor: 'rgb(255, 160, 122)' } 
  ];

const inverno = [
    { nome: 'Azul gelo', cor: 'rgb(240, 248, 255)' },
    { nome: 'Branco gelo', cor: 'rgb(240, 255, 255)' },    
    { nome: 'Lavanda', cor: 'rgb(230, 230, 250)' },   
    { nome: 'Azul suave', cor: 'rgb(135, 206, 235)' },
    { nome: 'Azul profundo', cor: 'rgb(0, 191, 255)' }
    
  ];

let i_estacao = 0;
let vet_estacao = primavera; 

function calcula_estacao() {
  clearInterval(intervalo);

  const mes_input = parseInt(document.getElementById("i_mes").value);
  document.getElementById("nome_mes").textContent = mes[mes_input - 1];

  if ([3, 4, 5].includes(mes_input)) {
    vet_estacao = outono;
    document.getElementById("nome_estacao").textContent = "Outono";
    atualizaEstacoesVisiveis("outono");
  } else if ([6, 7, 8].includes(mes_input)) {
    vet_estacao = inverno;
    document.getElementById("nome_estacao").textContent = "Inverno";
    atualizaEstacoesVisiveis("inverno");
  } else if ([9, 10, 11].includes(mes_input)) {
    vet_estacao = primavera;
    document.getElementById("nome_estacao").textContent = "Primavera";
    atualizaEstacoesVisiveis("primavera");
  } else {
    vet_estacao = verao;
    document.getElementById("nome_estacao").textContent = "Verão";
    atualizaEstacoesVisiveis("verão");
  }

  num_cor = 0;
  coresEstacao(); // atualiza imediatamente
  intervalo = setInterval(coresEstacao, 5000);
}

const intervalo = setInterval(coresEstacao, 0);

let num_cor;


function coresEstacao() {
  const elementos_cor = document.querySelectorAll(".cor");
  const div_estacoes = document.getElementById("estacoes");

  // Atualiza os blocos de cor
  for (let i = 0; i < elementos_cor.length; i++) {
      if (vet_estacao[i]) {
          elementos_cor[i].textContent = vet_estacao[i].nome;
          elementos_cor[i].style.backgroundColor = vet_estacao[i].cor;
      }
  }

  // Alterna a cor de fundo do container principal das estações
  if (vet_estacao[num_cor]) {
      div_estacoes.style.backgroundColor = vet_estacao[num_cor].cor;
      num_cor = (num_cor + 1) % vet_estacao.length;
  }
}

function atualizaEstacoesVisiveis(estacaoAtual) {
  const todasEstacoes = document.querySelectorAll(".estacao");
  todasEstacoes.forEach(div => {
    if (div.classList.contains(estacaoAtual)) {
      div.classList.add("ativa");
    } else {
      div.classList.remove("ativa");
    }
  });
}

clearInterval(intervalo);