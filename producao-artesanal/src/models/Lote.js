export class Lote {
produto;
litros;
rendimento;

calcularPrevisao() {
return this.litros * this.rendimento;
}

exibirRelatorio() {
console.log(`=== LOTE ===`);
console.log(`Produto: ${this.produto}`);
console.log(`Previsão de Produção: ${this.calcularPrevisao()} unidades`);
console.log("============")
}

}