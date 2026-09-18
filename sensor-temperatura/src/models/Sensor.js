export class Sensor {
idSensor;
localInst;
tempAtual;

atualizarLeitura(novaTemperatura) {
this.tempAtual = novaTemperatura;
}

verificarAlerta() {
if (this.tempAtual > 35) {
console.log(`ALERTA: Superaquecimento no(a) ${this.localInst}`);
} 
else {
console.log(`A temperatura no(a) ${this.localInst} está normal.`);
}
}
}