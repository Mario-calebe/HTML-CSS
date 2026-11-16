const servicos = [
  { nome: 'corte', preco: 40, duracao: 30, categoria: 'cabelo' },
  { nome: 'barba', preco: 25, duracao: 20, categoria: 'barba' },
  { nome: 'sobrancelha', preco: 15, duracao: 10, categoria: 'rosto' },
  { nome: 'completo', preco: 60, duracao: 45, categoria: 'combo' },
  { nome: 'pigmentação', preco: 35, duracao: 25, categoria: 'barba' }
]
// Passo 02
const nomes = servicos.map(nome => nome.nome)
console.log(nomes);
// Passo 03
const frases = servicos.map(frase => `${frase.nome}: R$ ${frase.preco}`)
console.log(frases);
// Passo 04
const ate30 = servicos.filter(servico => servico.preco <= 30)
console.log(ate30);
// Passo 05
const daBarba = servicos.filter(servico => servico.categoria === 'barba')
console.log(daBarba);
// Passo 06
const achar = servicos.find(completo => completo.nome === 'completo')
console.log(`${achar.nome} custa R$ ${achar.preco}`);

const procurar = servicos.find(manicure => manicure.nome === 'manicure')
if (procurar === undefined) console.log('Serviço não encontrado');
// Passo 07
const somarPreco = servicos.reduce((somar, servico) => somar + servico.preco, 0)
console.log(somarPreco);
// passo 08
const somarDuracao = servicos.reduce((somar, servico) => somar + servico.duracao, 0)
console.log(somarDuracao);
// Passo 09
const precoBarba = servicos.filter(servico => servico.categoria === 'barba').reduce((somar, item) => somar + item.preco, 0)
console.log(precoBarba);
// EXTRA includes
const escolhidos = ['corte', 'barba']
console.log(servicos.filter(s => escolhidos.includes(s.nome)).reduce((somar, s) => somar + s.duracao, 0));
// Desafio
const agenda = [
  { cliente: 'Ana', pedidos: ['corte', 'sobrancelha'], hora: '09:00', pago: true },
  { cliente: 'Bruno', pedidos: ['barba'], hora: '10:00', pago: false },
  { cliente: 'Carlos', pedidos: ['completo'], hora: '11:00', pago: true },
  { cliente: 'Diego', pedidos: ['corte', 'barba', 'pigmentação'], hora: '14:00', pago: false },
  { cliente: 'Eva', pedidos: ['sobrancelha'], hora: '15:30', pago: true }
]
// Passo A
const devendo = agenda.filter(horario => horario.pago === false).map(servico => servico.cliente)
console.log(devendo);
// Passo B
const primeiroBarba = agenda.find(servico => servico.pedidos.includes('barba'))
console.log(`${primeiroBarba.cliente} pediu barba às ${primeiroBarba.hora}`);

function precoDoServico(nomeS) {
  const a = servicos.find(servico => servico.nome == nomeS)
  return a.preco
}
precoDoServico('barba')
// Passo D
const totais = agenda.map(horario => horario.pedidos.reduce((somar, item) => somar + precoDoServico(item), 0))
console.log(totais);
const contas = agenda.map((horario) => ({ cliente: horario.cliente, total: horario.pedidos.reduce((somar, item) => somar + precoDoServico(item), 0) }))
console.log(contas);
// Passo E
const totalContas = contas.map(conta => conta.total).reduce((somar, item) => somar + item, 0)
console.log(totalContas);
// Passo F
const DevDores = agenda.filter(enrolam => enrolam.pago === false).map(p => p.pedidos.reduce((somar, item) => somar + precoDoServico(item), 0)).reduce((somar, item) => somar + item, 0)
console.log(DevDores);
// Passo D
const totalPedidos = agenda.map(p => p.pedidos.length).reduce((somar, p) => somar + p, 0)
console.log(totalPedidos);
// Chefão
const contagem = agenda.reduce((somar, horario) => {
  horario.pedidos.forEach(item => {
    let toma = somar[item] = (somar[item] || 0) + 1
    
  })
  return somar
}, {})
console.log(contagem)
// Pendente!!! Chefão não concluido