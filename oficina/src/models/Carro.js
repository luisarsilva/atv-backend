export class Carro {
modelo;
placa;
ano;
kmAtual;


Viagem(kmPercorrido) {
this.kmAtual += kmPercorrido;
}

verificarRevisao() {
console.log(`=== REVISÃO ===`)
if (this.kmAtual > 10000) {
return "Revisão Necessária!";

}
return "Tudo certo!";
}
}