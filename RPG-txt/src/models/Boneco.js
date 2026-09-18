export class Boneco {
nome;
classe;
vida;
forca;
cura;

sofrerDano(Dano) {
this.vida -= Dano;
if (this.vida <= 0) {
this.vida = 0;
console.log("Voce morreu HAHAHAHHAAHHA!");
}
}

recuperarVida(cura) {
this.vida += cura;
}
}