const vetor = [1, 5, 7, 3, 10, 12, 8];
let maior = vetor[0];

for (let i = 1; i < vetor.length; i++) {
  if (vetor[i] > maior) {
    maior = vetor[i];
  }
}

console.log(`O maior número do vetor é ${maior}`);

const numero = 21;
let a = 0;
let b = 1;

while (b < numero) {
  let temp = b;
  b = a + b;
  a = temp;
}

if (b === numero) {
  console.log(`${numero} pertence à sequência de Fibonacci`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci`);
}

const faturamentoMensal = [1500, 2500, 1800, 3500, 2800, 1900, 2000, 2100, 2200, 2900, 2400, 2700, 2600, 2300];
let somaFaturamento = 0;
let mediaFaturamento = 0;

for (let i = 0; i < faturamentoMensal.length; i++) {
  somaFaturamento += faturamentoMensal[i];
}

mediaFaturamento = somaFaturamento / faturamentoMensal.length;

let menorFaturamento = faturamentoMensal[0];
let maiorFaturamento = faturamentoMensal[0];
let diasAcimaDaMedia = 0;

for (let i = 0; i < faturamentoMensal.length; i++) {
  if (faturamentoMensal[i] < menorFaturamento) {
    menorFaturamento = faturamentoMensal[i];
  }
  
  if (faturamentoMensal[i] > maiorFaturamento) {
    maiorFaturamento = faturamentoMensal[i];
  }
  
  if (faturamentoMensal[i] > mediaFaturamento) {
    diasAcimaDaMedia++;
  }
}

console.log(`Menor faturamento: ${menorFaturamento}`);
console.log(`Maior faturamento: ${maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);

const faturamentoPorEstado = {
  'SP': 67836.43,
  'RJ': 36678.66,
  'MG': 29229.88,
  'ES': 27165.48,
  'Outros': 19849.53
};

let totalFaturamento = 0;

for (let estado in faturamentoPorEstado) {
  totalFaturamento += faturamentoPorEstado[estado];
}

for (let estado in faturamentoPorEstado) {
  let percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
