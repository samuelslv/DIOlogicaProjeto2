//VITORIAS e DERROTAS
let heroi = [100,59];

let nivel = nivelRankeada(heroi[0],heroi[1])

const text = "O Herói tem de saldo de " + nivel + " está no nível de "

console.log("\nSWITCH CASE")
switch (true) {
    case nivel < 10:
        console.log(text + "Ferro")
        break;
    case 11 <= nivel && nivel <= 20:
        console.log(text + "Bronze")
        break;
    case 21 <= nivel && nivel <= 50:
        console.log(text + "Prata")
        break;
    case 51 <= nivel && nivel <= 80:
        console.log(text + "Ouro")
        break;
    case 81 <= nivel && nivel <= 90:
        console.log(text + "Diamante")
        break;
    case 91 <= nivel && nivel <= 100:
        console.log(text + "Lendario")
        break;
    case 101 <= nivel:
        console.log(text + "Imortal")
        break;
    default:
        console.log("Default")
        break;

}


function nivelRankeada (vitorias, derrotas){
    return vitorias - derrotas
}