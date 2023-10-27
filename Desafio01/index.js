let nomeHeroi = "Wanderson Lucio"
let nivelXp = 5000
let mensagem = "O herói de nome "+ nomeHeroi + " está no nível de "

if (nivelXp <= 1000){
    console.log(mensagem + "Ferro.")
}
 else if(nivelXp >=1001 && nivelXp <=2000){
    console.log(mensagem + "Bronze.")
}
 else if(nivelXp >= 2001 && nivelXp <= 5000){
    console.log(mensagem + "Prata.")
} 
 else if(nivelXp >=6001 && nivelXp <= 7000){
    console.log(mensagem + "Ouro.")
}
 else if(nivelXp >=7001 && nivelXp <= 8000){
    console.log(mensagem + "Platina.")
} 
 else if(nivelXp >=8001 && nivelXp <= 9000){
    console.log(mensagem + "Ascendente.")
} 
 else if(nivelXp >=9001 && nivelXp <= 10000){
    console.log(mensagem + "Imortal.")
} 
 else{
    console.log(mensagem + "Radiante.")
    nivelXp >=10001
}



/*
## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/