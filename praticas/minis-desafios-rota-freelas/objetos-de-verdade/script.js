const servico = {
    nome: 'corte',
    preco: 40,
    duracao: 30
}
servico.preco = 50
servico.categoria = 'beleza'
delete servico.categoria
console.log(`${servico.nome} custa R$ ${servico.preco} e dura ${servico.duracao} min`)
const listaServicos = [
    {
        nome: 'corte',
        preco: 40,
        duracao: 30
    },
    {
        nome: 'barba',
        preco: 20,
        duracao: 10
    },
    {
        nome: 'sobrancelha',
        preco: 10,
        duracao: 5
    },
    {
        nome: 'completo',
        preco: 60,
        duracao: 45
    }
]
console.log(listaServicos[2].nome)
for (const item of listaServicos) {
    console.log(`${item.nome} custa R$ ${item.preco} e dura ${item.duracao} min`)
}
const aluno = {nome:'mario', patrimonio:0, beleza:100}

function descreverAluno(estudante) {
    return `${estudante.nome} tem ${estudante.patrimonio} de patrimonio e ${estudante.beleza} de beleza`  
}

const desAluno = descreverAluno(aluno)
console.log(desAluno);

const barbearia = {
    nome:'Beleza Pura',
    endereco:{rua:'Rua Palmeras',cidade:'rolandia'},
    servicos: listaServicos
}
console.log(barbearia.endereco.cidade)
console.log(barbearia.servicos[0].nome);


