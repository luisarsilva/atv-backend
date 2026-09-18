import readline from 'readline-sync';
import { Lote } from './src/models/Lote.js';

const ObjLote = new Lote();

console.log("=== PRODUTO ===")
ObjLote.produto = readline.question("Produto a ser feito: ");
ObjLote.litros = readline.questionFloat("Litros de oleo coletado: ");
ObjLote.rendimento = readline.questionInt("Rendimento por litro (unidades): ");
console.log("===============")

ObjLote.exibirRelatorio();