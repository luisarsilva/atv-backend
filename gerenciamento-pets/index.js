import readline from 'readline-sync';
import { Pet } from './Pet.js';

console.log("--- DADOS --- \n");

//Criação do Objeto
const ObjPet = new Pet();

//Colocar os Dados
ObjPet.nome = readline.question("Insira o nome do animal: ");
ObjPet.especie = readline.question("Insira a espécie do animal: ");
ObjPet.idade = readline.questionInt("Insira a idade do animal: ");
ObjPet.peso = readline.questionFloat("Insira o peso do animal: ");

//Saída
console.log("Ficha completa");
ObjPet.exibirRelatorio();

//Verificar a saúde
if (ObjPet.peso <= 2 ){
    console.log("Saúde: ABAIXO DO PESO");
    
}
else {
    console.log("Saúde: PESO NORMAL");
}