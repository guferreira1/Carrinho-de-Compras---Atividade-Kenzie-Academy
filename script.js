let produtos = [
{
    id: 1,
    nome: 'Monitor Gamer',
    preco: 1499.99
},
{
    id: 2,
    nome: 'Cadeira Gamer',
    preco: 1299.99
},
{
    id: 3,
    nome: 'Mouse Gamer',
    preco: 599.99
},
{
    id: 4,
    nome: 'Teclado Gamer',
    preco: 600.00
},
{
    id: 5,
    nome: 'Mousepad Gamer',
    preco: 200.00
}
]


const body = document.querySelector('body')

let main = document.createElement('main')
body.appendChild(main)

let titulo = document.createElement('h1')
main.appendChild(titulo)
titulo.innerText = 'Vistual Market'
titulo.className = 'titulo'


let itens = document.createElement('div')
main.appendChild(itens)
itens.className = 'cardSuperior'

let descItem = document.createElement('p')
itens.appendChild(descItem)
descItem.innerText = 'Item'

let descValor = document.createElement('p')
itens.appendChild(descValor)
descValor.innerText = 'Valor'

let produtcsList = document.createElement('ul')
main.appendChild(produtcsList)

produtcsList.className = 'lista'

let resultado = 0
for(let i = 0; i < produtos.length; i++){
   
    let productsDetail = document.createElement('li')
    let nome = document.createElement('p')
    let preco = document.createElement('span')
    productsDetail.className = 'classe'
    resultado = resultado + produtos[i].preco
        
    nome.innerText = produtos[i].nome
    preco.innerText = `R$ ${produtos[i].preco.toString().replace('.',',')}`

    productsDetail.append(nome, preco)

    produtcsList.appendChild(productsDetail)
}
// console.log(resultado)

let tratado = resultado.toString().replace('.', ',')
// console.log(tratado)

let secao = document.createElement('section')
main.appendChild(secao)

let div = document.createElement('div')
secao.appendChild(div)

let descricao = document.createElement('p')
let totalPreco = document.createElement('p')

descricao.innerText = `Total`
totalPreco.innerText = `R$ ${tratado}`
div.append(descricao, totalPreco)
div.className = 'cardResultado'

let botaoDiv = document.createElement('div')
secao.appendChild(botaoDiv)

let botao = document.createElement('button')
botaoDiv.appendChild(botao)

botaoDiv.className = 'cardBotao'
botao.appendChild(document.createTextNode('Finalizar Compra'))