// tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;
const operacaoMatematica2 = primeiroNumero * segundoNumero;
const operacaoMatematica3 = primeiroNumero / segundoNumero;
const operacaoMatematica4 = primeiroNumero - segundoNumero;

console.log(operacaoMatematica)
console.log(operacaoMatematica2)
console.log(operacaoMatematica3)
console.log(operacaoMatematica4)

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao)

// NaN -> Not A Number (não é um número)

const alura = 'Alura'
console.log(alura * primeiroNumero)

var a = 10
var b = 0
console.log(a/b) // Infinity

var a = 0
var b = 0
console.log(a/b) // NaN

function salarioTrabalhador(salario, horasTrabalhadas) {
    const salarioHora = salario / horasTrabalhadas
    const total = salarioHora
    // const total2 = salarioHora.toFixed(2)
    const total3 = Math.round(total)
    return total3;
}
console.log(`Você trabalhou 184 horas em um mês. o valor por hora é de: ${salarioTrabalhador(9000, 184)}`)