import readline from 'readline-sync';
import { Sensor } from './src/models/Sensor.js';

const Objsensor = new Sensor();
Objsensor.idSensor = 1;
Objsensor.localInst = "Estufa Principal";
Objsensor.tempAtual = 25.0;

console.log("--- ANALISE ---")
for (let i = 1; i <= 3; i++) {
let temp = readline.questionFloat(`Informe a leitura ${i} da temperatura: `);
Objsensor.atualizarLeitura(temp);
Objsensor.verificarAlerta();
console.log("-------------")
}