export class Pet {
    nome;
    especie;
    idade;
    peso; 
    saude;

    exibirRelatorio() {
        console.log(`\n --- FICHA DE CADASTRO ---`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Espécie: ${this.especie}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Peso: ${this.peso} Kg`);
    }
}