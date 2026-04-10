// Inicio


// saldo = vitorias - derrotas

// Info Heroi
let jogador = 'Player_001'
let vitorias = 57
let derrotas = 6

let patente 

// Logica do Saldo
let saldo = vitorias - derrotas 



// Boas Vindas
const boasVindas = `Bem-Vindo (a) à Calculadora de Ranking!`
console.log(boasVindas)
console.log("----------------------------------")


// ativar função (ON/OFF)
let ativacao = true

// Patentes
const ferro = 10,
bronze = 20,
prata = 50,
ouro = 80,
diamante = 90, 
lendario = 100,
imortal = 101

// Início
while (ativacao === true)

if (saldo <= ferro){
    patente = "Ferro"
    break
} else if (saldo <= bronze){
    patente = "Bronze"
    break
} else if (saldo <= prata){
    patente = "Prata"
    break
} else if (saldo <= ouro){
    patente = "Ouro"
    break
} else if (saldo <= diamante){
    patente = "Diamante"
    break
} else if (saldo <= lendario){
    patente = "Lendario"
    break
} else {
    patente = "Imortal"
    break
}

// final
let mensagemFinal = `O herói ${jogador} tem o saldo de ${saldo} vitórias e está no nível ${patente}`

console.log(mensagemFinal)


