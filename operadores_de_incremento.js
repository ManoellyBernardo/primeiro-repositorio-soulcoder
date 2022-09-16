alert("Código Funcionado!")
const nomeUsuario = prompt("Olá, usuário, qual é seu nome ?")

let num = Number(prompt("Olá, " + nomeUsuario + ". Digite algum número, por favor :)"))
console.log(typeof num)

let sucessor = ++num
let antecessor = --num

alert("O sucessor de " + num + " é " + sucessor)
alert("O antecessor de " + num + " é " + antecessor)