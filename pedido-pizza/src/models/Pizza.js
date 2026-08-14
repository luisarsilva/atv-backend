export class Pizza {
sabor;
tamanho;
quantidade;
precoUni;

calcularTotal() {
return this.precoUni * this.quantidade;
}

exibirRecibo() {
console.log(`\n=== RECIBO ===`);
console.log(`Pedido: ${this.quantidade} Pizza ${this.tamanho} de ${this.sabor}`);
console.log(`Total a pagar: R$ ${this.calcularTotal().toFixed(2)}`);
console.log(`--------------------------------------------\n`);
}
}