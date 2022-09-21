const altura = parseFloat(prompt("Qual é a sua altura ?"))
const sexo = prompt("Qual é o seu sexo [M ou F] ? ")

if (sexo == "M") {
    const pesoIdealHomens = (72.7 * altura) - 58
    alert("Seu peso ideal é de " + pesoIdealHomens.toFixed(2) + " Kgs.")
} else {
    const pesoIdealMulheres = (62.1 * altura) - 44.7
    alert("Seu peso ideal é de " + pesoIdealMulheres.toFixed(2) + " Kgs.")
}