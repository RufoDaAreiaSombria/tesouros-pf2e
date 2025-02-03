/*Função pra rolar dados aleatórios*/
function rolldice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let nd = document.getElementById('nd')
let dificuldade = document.getElementById('dificuldade')

const tabela = {
  1: { Low: 13, Moderate: 18, Severe: 26, Extreme: 35 },
  2: { Low: 23, Moderate: 30, Severe: 45, Extreme: 60 },
  3: { Low: 38, Moderate: 50, Severe: 75, Extreme: 100 },
  4: { Low: 65, Moderate: 85, Severe: 130, Extreme: 170 },
  5: { Low: 100, Moderate: 135, Severe: 200, Extreme: 270 },
  6: { Low: 150, Moderate: 200, Severe: 300, Extreme: 400 },
  7: { Low: 220, Moderate: 290, Severe: 440, Extreme: 580 },
  8: { Low: 300, Moderate: 400, Severe: 600, Extreme: 800 },
  9: { Low: 430, Moderate: 570, Severe: 860, Extreme: 1140 },
  10: { Low: 600, Moderate: 800, Severe: 1200, Extreme: 1600 },
  11: { Low: 865, Moderate: 1150, Severe: 1725, Extreme: 2300 },
  12: { Low: 1250, Moderate: 1650, Severe: 2475, Extreme: 3300 },
  13: { Low: 1875, Moderate: 2500, Severe: 3750, Extreme: 5000 },
  14: { Low: 2750, Moderate: 3650, Severe: 5500, Extreme: 7300 },
  15: { Low: 4100, Moderate: 5450, Severe: 8200, Extreme: 10900 },
  16: { Low: 6200, Moderate: 8250, Severe: 12400, Extreme: 16400 },
  17: { Low: 9600, Moderate: 12800, Severe: 19200, Extreme: 25600 },
  18: { Low: 15600, Moderate: 20800, Severe: 31200, Extreme: 41600 },
  19: { Low: 26600, Moderate: 35500, Severe: 53500, Extreme: 71000 },
  20: { Low: 36800, Moderate: 49000, Severe: 73000, Extreme: 98000 }
};

function gerar() {
  let ndval = nd.value
  let difval = dificuldade.value
  resultado.innerHTML = ''
  budget(ndval, difval)
  }

  function budget(nd, dificuldade) {

  let budget = tabela[nd][dificuldade];
  resultado.innerHTML = `O valor de budget correspondente é ${budget}`
}