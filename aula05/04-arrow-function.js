function apresentar(nome) {
    return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

console.log(apresentarArrow("Vitoria"))
console.log(soma(1, 2))