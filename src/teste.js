// // | codigo    | descrição                   | valor   |
// //   |-----------|-----------------------------|---------|
// //   | cafe      | Café                        | R$ 3,00 |
// //   | chantily  | Chantily (extra do Café)    | R$ 1,50 |
// //   | suco      | Suco Natural                | R$ 6,20 |
// //   | sanduiche | Sanduíche                   | R$ 6,50 |
// //   | queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |
// //   | salgado   | Salgado                     | R$ 7,25 |
// //   | combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |
// //   | combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |

const fafas = (pagamento, pedido) => {

    const cardapio = {
        cafe: {description: 'Café', value: 3.00},
        chantily: {description: 'Chantily (extra do café', value: 1.50},
        suco: {description: 'Suco natural', value: 6.20},
        sanduiche: {description: 'Sanduíche', value: 6.50},
        queijo: {description: 'Queijo (extra do sanduíche', value: 2.00},
        salgado: {description: 'Salgado', value: 7.25},
        combo1: {description: '1 Suco e 1 Sanduíche', value: 9.50},
        combo2: {description: '1 Café e 1 Sanduíche', value: 7.50},
    }

    const formaDePagamento = {
        dinheiro: .95,
        debito: 1,
        credito: 1.03
    }

    let valorDePagamento = 0

    if(pedido.length === 0){
        return 'Não há itens no carrinho de compra!';     
    }

    for(const item of pedido){
        if(!cardapio[item.produto]){
            return 'Esse produto não está no cardápio'
        }

        const hasPricipal = pedido.some((fafas) => (fafas.produto === item.extra))

        if(item.extra && !hasPricipal){
            return 'Item extra não pode ser pedido sem o principal'
        }

        valorDePagamento += (cardapio[item.produto].value * item.quantidade)
    }

    if(!formaDePagamento[pagamento]){
       return `Essa forma de pagamento ("${pagamento}") não é aceita no estabelecimento`
    }

    return valorDePagamento.toFixed(2)
}

const pedido = [
    {produto: 'cafe', quantidade: 2},
    {produto: 'sanduiche', quantidade: 1},
]

const pedido2 = []

const pedido3 = [
    {produto: 'cafe', quantidade: 2},
    {produto: 'chantily', extra: 'cafe', quantidade: 2},
    {produto: 'sanduiche', quantidade: 1},
]

const pagamento = 'dinheiro'
const pagamento2 = 'debito'

console.log(fafas(pagamento, pedido3))
console.log(fafas(pagamento2, pedido2))
console.log(fafas('bungas', pedido3))



// value.forEach(item => {
//     const {produto, quantidade, extra} = item

//     if(!cardapio[produto]){
//         console.log('O produto pedido não está no cardápio')
//         return 
//     }


//     const hasPricipal = value.some(fafas => (
//         fafas.produto === extra
//     ))

//     if(!!item.extra && !hasPricipal){
//         return 'Item extra não pode ser pedido sem o principal';

//     }

//     valorDePagamento += cardapio[produto].value * quantidade

//     })
    
//     return 'R$' + valorDePagamento.toFixed(2)