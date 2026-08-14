import readline from 'readline-sync';
import { Conta } from './Conta.js';

console.log(`=== CADASTRO DA CONTA ===`);

const ObjConta = new Conta;

ObjConta.id = readline.questionInt("Insira o seu ID: ");
ObjConta.titular = readline.question("Insira o seu nome: ");

let depositar = readline.questionFloat(`Insira o valor do deposito: `);
ObjConta.depositar(depositar);

let sacar = readline.questionFloat("Insira o valor de saque: ");
ObjConta.sacar(sacar);

ObjConta.exibirSaldo();