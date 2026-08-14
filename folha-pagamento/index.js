import readline from 'readline-sync';
import { Funcionario } from './src/models/Funcionario.js';

const Objfunc = new Funcionario();

console.log("=== REGISTRO ===")
Objfunc.nome = readline.question("Nome do funcionario: ");
Objfunc.cargo = readline.question("Cargo: ");
Objfunc.salarioBase = readline.questionFloat("Salario base: R$ ");
Objfunc.horasExtras = readline.questionFloat("Horas extras no mes: ");

console.log(`=== HOLERITE ===`);
console.log(`Funcionário: ${Objfunc.nome} (${Objfunc.cargo})`);
console.log(`Salário Final: R$ ${Objfunc.calcularSalarioFinal().toFixed(2)}`);