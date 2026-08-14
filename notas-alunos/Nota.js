export class Nota {
    nome;
    nota1;
    nota2;

    calcularMedia() {
       return (this.nota1 + this.nota2) / 2;
    }

    exibirRelatorio(){
        console.log(`\n---- DADOS ----`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Nota 1: ${this.nota1}`);
        console.log(`Nota 2: ${this.nota2}`);
        console.log(`Média: ${this.calcularMedia()}`);
        
        if (this.calcularMedia() >= 7) {
    console.log("APROVADO");
}
    else {
    console.log("REPROVADO");
} 
        console.log(`-------------------\n`);
    }
}