import readline from 'readline-sync';
import { Pizza } from './src/models/Pizza.js';

console.log("=== PEDIDO ===")
const Objpedido = new Pizza();

Objpedido.sabor = readline.question("Sabor da Pizza: ");
Objpedido.tamanho = readline.question("Tamanho (P/M/G): ");
Objpedido.quantidade = readline.questionInt("Quantidade: ");
Objpedido.precoUni = readline.questionFloat("Preco unitario: R$ ");

Objpedido.exibirRecibo();