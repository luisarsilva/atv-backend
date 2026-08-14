export class Funcionario {
nome;
cargo;
salarioBase;
horasExtras;

calcularValorHoraExtra() {
return (this.salarioBase / 220) * 1.5;
}

calcularSalarioFinal() {
let valorTotalExtras = this.horasExtras * this.calcularValorHoraExtra();
return this.salarioBase + valorTotalExtras;
}
}