//Delimitação de Strings

const aspasSimples = 'Olá, Mundo'
console.log(aspasSimples)
const aspasDuplas = "Olá, Mundo"
console.log(aspasDuplas)

//Caracteres de escape

const barraInvertida = "Olá,\nMundo"
console.log(barraInvertida)

const textoComCrase = `Olá,
Mundo. Em JavaScript a regra 
 
é não ter regras`
 console.log(textoComCrase)

 //Concatenação -> no arquivo concatenação.html

 //Métodos das strings

 const texto = "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie."

 console.log(texto)
 console.log(texto.toUpperCase()) //texto em maiusculo
 console.log(texto.toLowerCase()) //texto em minusculo
 console.log(texto.concat(" Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.")) // concatena
 console.log(texto[0]) //"pescando" caracter
 console.log(texto.substring(24, 30)) //"cortando" o texto
 console.log(texto.replace("a", "@")) //substitui a primeira ocorrência da pesquisa
 console.log(texto.replaceAll("a", "@")) //substitui todas as ocorrências
 console.log(texto.replace(/a/g, "@")) //g -> global
 console.log(texto.replace(/a/gi, "@")) //gi -> global e ignorando se a palavra/letra está em maiusculo ou minisculo
 
 const html = "<!DOCTYPE html>\n<html></html>"

 console.log(html.startsWith("<!DOCTYPE html>")) //testa se a String inicia com:
 console.log(html.endsWith("</body>")) //testa se a String termina com:

 const mensagem = "                             Olá, Mundo                            "

 console.log(mensagem.trim) //exemplo sem trim
 console.log(mensagem.trim()) //retira os espaços em branco em excesso, no incio e fim do texto
 
 let senha = "love"
 
 console.log(senha.length) //tamanho da variavel
 