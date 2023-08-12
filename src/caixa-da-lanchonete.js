class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
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
    
        if(itens.length === 0){
            return 'Não há itens no carrinho de compra!';     
        }
    
        for(const item of itens){
            if(!cardapio[item.produto]){
                return 'Esse produto não está no cardápio'
            }
    
            const hasPricipal = itens.some((fafas) => (fafas.produto === item.extra))
    
            if(item.extra && !hasPricipal){
                return 'Item extra não pode ser pedido sem o principal'
            }
    
            valorDePagamento += (cardapio[item.produto].value * item.quantidade)
        }
    
        if(!formaDePagamento[metodoDePagamento]){
           return `Essa forma de pagamento "${metodoDePagamento}" não é aceita no estabelecimento`
        }
    
        return `R$ ${valorDePagamento.toFixed(2) * formaDePagamento[metodoDePagamento]}`
    }

}

export { CaixaDaLanchonete };
