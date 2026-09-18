import readline from 'readline-sync';
import { Atleta } from './src/models/Atleta.js';

const Objatleta = new Atleta();

console.log("--- INSIRA SEUS DADOS ---")
Objatleta.nome = readline.question("Nome do lutador: ");
Objatleta.peso = readline.questionFloat("Peso atual (kg): ");
Objatleta.win = readline.questionInt("Vitorias: ");
Objatleta.fail = readline.questionInt("Derrotas: ");
console.log("-------------------------")

Objatleta.exibirCartel();