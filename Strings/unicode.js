function toCodePoint(char){
    var hex = char.charCodeAt(0).toString(16); //Convierte el caracter a hexadecimal
    return "\\u" + "0000".substring(0, 4 - hex.length) + hex; // Agrega los 0's faltantes al inicio
}

console.log(toCodePoint("a"));