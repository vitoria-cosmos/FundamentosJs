// parâmetros de função 

            //1       //2
// function soma(numero1, numero2) {
//     return numero1 + numero2;
// }

// function somaOutroNumero() {
//     return 50 + 25;
// }

// console.log(soma(2, 2))
// console.log(soma(245, 20))
// console.log(soma(-500, 60))

// parâmetro x argumento

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}.`
}

// console.log(nomeIdade(40, "Juliana"))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;

}
                            //9         //6
// console.log(multiplica(soma(4, 5), soma(3, 3)))

console.log(multiplica(soma(4, 5)))