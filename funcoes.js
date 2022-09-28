/**
 * Funçoes são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */

/**Parâmetros: são valores que passamos para as funções, para que elas utilizem esses valores dentro delas */

//passar um valor como parâmetro para mostra-lo dentro do alert
function cumprimentar(mensagem, repetir){
    alert(mensagem.toUpperCase())//sempre que uma palavra é acompanhada de um parentese é uma função/metod(sendo esse ultimo chamado assim quando esta dentro de um objeto)
    for (let i = 1; i <= repetir; i++){
        alert(mensagem)    
    }
}

function cumprimentar2(){

}

cumprimentar("Olá, Mundo", 2)
cumprimentar("s2 s2s 2s", 2)
cumprimentar("<3 <3 <3", 2)

function soma(num, num2){
    let result = num + num2 
    return result//Return -> significa q a função está enviando o resultado da execução daquela função
    //return é a ultima linha da função
}

function maiorValor(a, b){
if (a>b) {
    return a
} else {
    return b
}
}

console.log(7.5,7)
console.log(2,5)
let resultado = soma(8,3)

console.log("O valor da váriavel resultado é: " + resultado)

const num1 = parseInt(prompt("Digite um número: "))
const num2 = parseInt(prompt("Digite um número: "))
alert("O maior valor é " + maiorValor(num1,num2))
