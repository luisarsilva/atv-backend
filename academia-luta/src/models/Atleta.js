export class Atleta {
nome;
peso;
win;
fail;

definirCategoria() {
if (this.peso <= 70) {
return "Leve";
} 
else if (this.peso > 70 && this.peso <= 85) {
return "Médio";
} 
else {
return "Pesado";
}
}

exibirCartel() {
let totalLutas = this.win + this.fail;

console.log(`\n--- FICHA ---`);
console.log(`Lutador: ${this.nome}`);
console.log(`Peso: ${this.peso} Kg`)
console.log(`Categoria: ${this.definirCategoria()}`);
console.log(`Total de Lutas: ${totalLutas}`);
console.log(`Vitórias: ${this.win} \nDerrotas: ${this.fail}`);
console.log(`-------------`)
}
}