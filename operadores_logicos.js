
//Operador E

// V --> Verdadeiro
// F --> Falso

/**
 * V V -> V
 * V F -> F
 * F V -> F
 * F F -> F
 */

const media = (7+10+10)/3
const presenca = 0.8

console.log(media >= 7 && presenca >= 0.8) //true

//Operador OU

/**
 * V V -> V
 * V F -> V
 * F V -> V
 * F F -> F
 */

console.log(4>7||3<2) //false
console.log(5>3.5||7>8) //true

//Operador Não

/**
 * NOT V -> F
 * NOT F -> V
 */

const resultado = 5 < 3

console.log(!resultado)