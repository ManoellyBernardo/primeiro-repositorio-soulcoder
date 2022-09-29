/**Criara uma função responsavel por mostrar o alerta na tela */

let cont = 0

function mostrarAlerta(){
    /**o document é um objeto que faz a representação do HTML dentro do JavaScript */
    const divAlerta = document.getElementById("alerta") //getElementById serve para recuperar um elemento HTML pelo id
    /** A propriedade classList retorna um array com todas as classes CSS que um elemento possui*/
    /** classList.add() serve para adicionar novas classes dinamicamente dentro de um elemento HTML*/
    divAlerta.classList.add("mostrar")
    let contador = document.getElementById("cont")
    cont++
    contador.innerHTML = "Você clicou " + cont + " vezes."
} 

function fecharAlerta(){
    const divAlerta = document.getElementById("alerta")
    divAlerta.classList.remove("mostrar") //classList.remove() remove dinamicamente uma classe dentro do um elemento HTML
}

const btnMostrar = document.getElementById("mostrar")
const btnFechar = document.getElementById("fechar")

/**addEventListenner é um metodo que permite ouvir um evento do HTML pelo JavaScript */
/**Se eu precisar passar uma função como parametro eu passo a referência dela, ou seja, a função sem os parênteses */

btnMostrar.addEventListener("click", mostrarAlerta) //on é um pré-fixo usado apenas no HTML
btnFechar.addEventListener("click", fecharAlerta)
