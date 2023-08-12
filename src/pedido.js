import { CaixaDaLanchonete } from "./caixa-da-lanchonete.js";

const pedido = [
    {produto: 'cafe', quantidade: 2},
    {produto: 'sanduiche', quantidade: 1},
]

const pedido2 = []

const pedido3 = [
    {produto: 'chantily', extra: 'cafe', quantidade: 1},
    {produto: 'sanduiche', quantidade: 1},
]

const ernesto = new CaixaDaLanchonete()

console.log(ernesto.calcularValorDaCompra('dinheiro', pedido3));