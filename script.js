const carrinho = {
    compras : [
        {
            nome : 'caneta',
            preco : 2.70,
            quantidade : 10
        },
        {
            nome: 'borracha',
            preco : 3.20,
            quantidade : 5
        },
        {
            nome : 'lapiseira',
            preco : 8.50,
            quantidade : 3
        }
    ]
}
const somaItens = carrinho.compras.length

let somaQuantidades = 0

let valorTotal = 0

carrinho.compras.forEach(function(compra){
    somaQuantidades += compra.quantidade
    compra.precoTotal = (compra.preco * compra.quantidade)
    valorTotal += compra.precoTotal
})

console.log(`Total de itens diferentes no carrinho: ${somaItens} itens
Total de itens no carrinho: ${somaQuantidades} itens
Valor total do carrinho: R$ ${valorTotal.toFixed(2)}`)

const carrinhoPresente = {
    ...carrinho,
    nome : 'Fulano',
    formaPagamento : 'Cartão Presente'
}

texto = `Presente para ${carrinhoPresente.nome}\nForma de pagamento: ${carrinhoPresente.formaPagamento}
Valor Total do Carrinho: R$ ${valorTotal.toFixed(2)}\n\n`

carrinhoPresente.compras.forEach(function(compra, index){
    texto += `Produto ${index+1}: ${compra.nome}\nPreço: ${compra.preco}\nQuantidade: ${compra.quantidade}\nPreço total: ${compra.precoTotal.toFixed(2)}\n\n`
})

console.log(texto)
