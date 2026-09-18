import readline from 'readline-sync';
import { Boneco } from './src/models/Boneco.js';

const Objheroi = new Boneco();
Objheroi.vida = 100;
Objheroi.forca = 20;

console.log("--- INICIO ---")
Objheroi.nome = readline.question("Digite o nome do heroi: ");
Objheroi.classe = readline.question("Qual a classe (Mago/Guerreiro/etc): ");
Objheroi.vida = 100;
Objheroi.forca = 20;
console.log(`Um monstro te atacou ${Objheroi.nome}!`);

let dano = readline.questionInt("Quanto de dano foi causado? ");
Objheroi.sofrerDano(dano);

let cura = readline.questionInt(`Voce achou uma poçao de cura, o quanto voce é curado? `)
Objheroi.recuperarVida(cura);

console.log(`Status: Vida Restante = ${Objheroi.vida}`);