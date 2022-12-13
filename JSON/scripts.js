const objs = [
    {
        nome: 'Bruna',
        idade: 28,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: 'Programadora',
            empresa: 'Leolardo'
        },
        hobbies: [
            'Programar',
            'Ler',
            'Estudar'
        ]
    },
    {
        nome: 'João',
        idade: 25,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null
        },
        hobbies: [
            'Jogar',
            'Academia',
            'Cinema'
        ]   
    }
]

console.log(objs)
//JSON
// converter objeto para json
const jsonData = JSON.stringify(objs)

console.log(jsonData)
console.log(typeof jsonData)

//converter json para objeto
const objData = JSON.parse(jsonData)

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
})