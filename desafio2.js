/**
 * Um posto está vendendo combustíveis com a seguinte tabela de descontos:
 * Álcool = até 25L = 2% off
 *          acima de 25L = 4% off
 * Gasolina = até 25L = 3% off
 *           acima de 25L = 5% off 
 * Escreva um algoritimo que leia o número de litros vendidos e o tipo de combustível (A para Alcool e G para gasolina), calcule e imprima o valor a ser pagp pelo cliente.
 * Sabendo-se que o 1l de gasolina = R$2,70 e 1l de álcool = R$1,90
 */

const tipoCombustivel = prompt(`
Qual será o tipo de combustível ?

Digite A se for álcool;
Digite G se for gasolina.
`)

if (tipoCombustivel == "A") {
    
    const litrosCombustivel = parseFloat(prompt("Quantos litros de álcool você irá colocar ?"))
    if (litrosCombustivel <= 25) {
        const precoAlcool = litrosCombustivel * 1.9 - litrosCombustivel * 0.02
        alert("Você irá pagar " + precoAlcool)
    } else {
        const precoAlcool = litrosCombustivel * 1.9 - litrosCombustivel * 0.04
        alert("Você irá pagar " + precoAlcool)
    }
}

if (tipoCombustivel == "G") {
    
    const litrosCombustivel = parseFloat(prompt("Quantos litros de gasolina você irá colocar ?"))
    if (litrosCombustivel <= 25) {
        const precoGasolina = litrosCombustivel * 2.7 - litrosCombustivel * 0.03
        alert("Você irá pagar " + precoGasolina)
    } else {
        const precoGasolina = litrosCombustivel * 2.7 - litrosCombustivel * 0.05
        alert("Você irá pagar " + precoGasolina)
    }
}