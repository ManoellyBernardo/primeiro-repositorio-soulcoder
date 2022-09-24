/**
 * Arrays ou vetores
 * 
 */

/**let arr = new Array()
let arr3 = [] //forma diferente, porém igual a de cima. É a forma mais usada.
let arr2 = new Array(5)*/

/**
 * cada valor de um array é separado por uma vírgula
 */

/**
 * Sempre que vc tentar recuperar uma posição que não existe será mostrado 'undefined"
 */

let arr = [10,15,9.8, "Eu sou um texto dentro de um array", true, false, "Olá"]

console.log(arr)
console.log(arr[4])
console.log(arr[4], arr[6])

arr[3] = "oi, eu sou a outra"

console.log(arr[3])

console.log(arr.length)

arr[7] = "Opa"
console.log(arr[7])
console.log(arr.length)