const objs = [
    [
        {
            nome: 'Gato',
            especie: 'Felino',
            idade: 6
        },
        {
            nome: 'Arara',
            especie: 'Ave',
            idade: 2
        },
        {
            nome: 'Leão',
            especie: 'Felino',
            idade: 9
        }
    ]
]

const jsonData = JSON.stringify(objs)

console.log(jsonData)

