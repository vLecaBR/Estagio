
function ehFibonacci(number) {
    let a = 0;
    let b = 1;

    while (a <= number) {
        if (a === number) {
            return true;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
    return false;
}

function main() {
    const number = parseInt(prompt("digite o número para verificar se pertence à sequência de Fibonacci:"));

    if (ehNaN(number)) {
        console.log("entrada inválida. Por favor, insira um número válido.");
        return;
    }

    const result = ehFibonacci(number);

    if (result) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
    }
}

main();
