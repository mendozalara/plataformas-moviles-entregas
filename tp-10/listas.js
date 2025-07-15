
var listaNumerosEjemplo = [2,4,6,-1,5,-4,0];

function invertirLista(listaDeNumeros) {
    return listaDeNumeros.slice().reverse();
}

function sumarLista(listaDeNumeros) {
    return listaDeNumeros.reduce((acc, num) => acc + num, 0);
}

function contarElementosLista(listaDeNumeros) {
    return listaDeNumeros.length;
}

function calcularPromedio(listaDeNumeros) {
    if (listaDeNumeros.length === 0) return 0;
    return sumarLista(listaDeNumeros) / listaDeNumeros.length;
}

function triplicarLista(listaDeNumeros) {
    return listaDeNumeros.map(num => num * 3);
}

function crearListaDeNumeros(inicio, fin) {
    let resultado = [];
    for (let i = inicio; i <= fin; i++) {
        resultado.push(i);
    }
    return resultado;
}

function ordenarDeMayorAMenor(listaDeNumeros) {
    return listaDeNumeros.slice().sort((a, b) => b - a);
}

function encontrarNumeroMayor(listaDeNumeros) {
    return Math.max(...listaDeNumeros);
}

function ordenarPalabrasPorLongitud(listaDePalabras) {
    return listaDePalabras.slice().sort((a, b) => a.length - b.length);
}

function encontrarPalabraMasCorta(listaDePalabras) {
    return listaDePalabras.reduce((min, palabra) => palabra.length < min.length ? palabra : min);
}

function filtrarSoloPositivos(listaDeNumeros) {
    return listaDeNumeros.filter(num => num > 0);
}

function contarAprobados(listaDeNotas) {
    return listaDeNotas.filter(nota => nota >= 6).length;
}

function filtrarSoloTruthy(listaDeValores) {
    return listaDeValores.filter(valor => Boolean(valor));
}

function enumerarLista(listaDePalabras) {
    if (listaDePalabras.length === 0) return "";
    if (listaDePalabras.length === 1) return listaDePalabras[0] + ".";
    let resultado = listaDePalabras.slice(0, -1).join(", ") + " y " + listaDePalabras[listaDePalabras.length - 1] + ".";
    return resultado.charAt(0).toUpperCase() + resultado.slice(1);
}

console.log("invertirLista([2,3,4]): ", invertirLista([2,3,4]));
console.log("sumarLista([2,3,4]): ", sumarLista([2,3,4]));
console.log("contarElementosLista([2,3,4]): ", contarElementosLista([2,3,4]));
console.log("calcularPromedio([2,3,4]): ", calcularPromedio([2,3,4]));
console.log("calcularPromedio(listaNumerosEjemplo): ", calcularPromedio(listaNumerosEjemplo));
console.log("triplicarLista([1, 2, 3]): ", triplicarLista([1, 2, 3]));
console.log("crearListaDeNumeros(2,5): ", crearListaDeNumeros(2,5));
console.log("ordenarDeMayorAMenor([2,3,4]): ", ordenarDeMayorAMenor([2,3,4]));
console.log("ordenarDeMayorAMenor(listaNumerosEjemplo): ", ordenarDeMayorAMenor(listaNumerosEjemplo));
console.log("encontrarNumeroMayor([2,3,4]): ", encontrarNumeroMayor([2,3,4]));
console.log("encontrarNumeroMayor(listaNumerosEjemplo): ", encontrarNumeroMayor(listaNumerosEjemplo));
console.log("ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): ", ordenarPalabrasPorLongitud(['abc', 'a', 'ab']));
console.log("encontrarPalabraMasCorta(['abc', 'a', 'ab']): ", encontrarPalabraMasCorta(['abc', 'a', 'ab']));
console.log("filtrarSoloPositivos([1,-1,0]): ", filtrarSoloPositivos([1,-1,0]));
console.log("filtrarSoloPositivos(listaNumerosEjemplo): ", filtrarSoloPositivos(listaNumerosEjemplo));
console.log("contarAprobados([10, 4, 6, 7, 1, 9]): ", contarAprobados([10, 4, 6, 7, 1, 9]));
console.log("filtrarSoloTruthy(): ", filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}]));
console.log("enumerarLista(): ", enumerarLista(["Han", "Leia", "Luke", "Yoda"]));
