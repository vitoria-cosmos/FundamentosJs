// tipo de dado 
// booleanos 

// conversão implícita - converte um tipo de dado em outro
const numero = 456;

// const numeroString = ("456"); 

console.log(numero === numeroString) //false
console.log(numero == numeroString) //true


// Concatenação
console.log(numero + numeroString) // ele junta os números, mas não soma


// conversão explícita - Transformar de forma forçada.
// Função Number() e String()

const numeroString = Number("456");
console.log(numero + numeroString); // agora soma os números


// NaN - Not a Number
// const numeroString = Number("456a")