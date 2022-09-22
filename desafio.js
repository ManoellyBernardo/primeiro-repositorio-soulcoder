/**Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10% */

let precoProduto = parseFloat(prompt("Qual é o preço do produto ?"))

while (isNaN(precoProduto) || precoProduto <= 0) {
    alert("O preço digitado é inválido!! Por favor, informe o preço apenas com números, sem carácteres especiais")
    precoProduto = parseFloat(prompt("Qual é o preço do produto ?"))
}

let metodoPagamento = parseInt(prompt(`
Informe o método de pagamento:
Digite 1 para pagamento em cheque;
Digite 2 para pagamento em dinheiro;
Digite 3 para pagamento em cartão.
`))

while (isNaN(metodoPagamento) || metodoPagamento > 3 || metodoPagamento <= 0) {
    alert("Opção inválida. Por favor, tente novamente.")
    metodoPagamento = parseInt(prompt(`
    Informe o método de pagamento:
    Digite 1 para pagamento em cheque;
    Digite 2 para pagamento em dinheiro;
    Digite 3 para pagamento em cartão.
    `))
}

if (metodoPagamento == 1 || metodoPagamento == 2) {
    const precoFinalDesconto = precoProduto * 0.9
    alert("O preço final do produto é: " + precoFinalDesconto.toFixed(2) + " reais.")
} else {
    const parcelamentoCartao = parseInt(prompt(`

    Você ira pagar com cartão!!

    Então, informe sobre o parcelamento:
    Digite 1 se for à vista;
    Digite 2 se for em 2x;
    Digite 3 se for em 3x ou mais.
    `))

    if (parcelamentoCartao == 1) {
        const precoFinalDesconto = precoProduto * 0.85
        alert("O preço final do produto é: " + precoFinalDesconto.toFixed(2) + " reais.")
    } else if (parcelamentoCartao == 2) {
        alert("O preço final do produto é: " + precoProduto.toFixed(2) + " reais.")
    } else {
        const precoFinal = precoProduto * 1.1
        alert("O preço final do produto é: " + precoFinal.toFixed(2) + " reais.")
    }
} 