function inverterString(str) {
    let invertedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedStr += str[i];
    }
    return invertedStr;
}

const inputString = prompt("digite uma string para inverter:");
const stringInvertida = inverterString(inputString);

console.log("string original:", inputString);
console.log("string invertida:", stringInvertida);
