/**
 * Objeto 
 */

let end = {
    rua: "Rua",
    numero: 456,
    estado: "BH",
    complemento: "Sem complemento",
    CEP: "123000-000"
}

let pessoa = {
    nome: "Joana",
    idade: 23,
    cpf: "123.123.123.-12",
    altura: 156,
    endereco: {...end}, //Destructuring
    solteiro: true,
    habilidade: ["React", "Java", "JavaScript", "Golang", "Rust"],
    comprimentar(){
        console.log("Olá, tudo bem ? Meu nome é " + this.nome) //Quando desejo referenciar o objeto dentro dele msm, se utiliza a palavra "this"
    }
}

console.log(end)
console.log(pessoa.endereco.rua)

pessoa.nome = "Pablo Escobar"

pessoa.comprimentar()

pessoa.habilidade.push("Angular")
console.log(pessoa.habilidade)

console.log(pessoa["cpf"])

console.log()