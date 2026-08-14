import readline from 'readline-sync';
import { Carro } from './src/models/Carro.js';

console.log("=== REGISTRO ===");

const Objveiculo = new Carro ();

Objveiculo.modelo = readline.question("Modelo do Veiculo (ex: Chevrolet S10): ");
Objveiculo.placa = readline.question("Placa: ");
Objveiculo.ano = readline.questionInt("Ano: ");
Objveiculo.kmAtual = readline.questionFloat("KM atual: ");

let kmsAndados = readline.questionFloat("Quantos km rodou no ultimo mes? ");

Objveiculo.Viagem(kmsAndados);
console.log(`KM Atualizado: ${Objveiculo.kmAtual}`);
console.log(`Status: ${Objveiculo.verificarRevisao()}`);