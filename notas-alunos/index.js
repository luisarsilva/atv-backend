import readline from 'readline-sync';
import { Nota } from './Nota.js';

console.log(`---- MÉDIA----\n`)

const ObjNota = new Nota;

ObjNota.nome = readline.question("Insira o nome do aluno: ");
ObjNota.nota1 = readline.questionFloat("Insira a primeira nota: ");
ObjNota.nota2 = readline.questionFloat("Insira a segunda nota: ");


console.log("--- Ficha completa ---\n");
ObjNota.exibirRelatorio();