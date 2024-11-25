const numeroSenha = document.querySelector(".parametro-senha-texto");
let tamanhoSenha = 666;
numeroSenha.textcontent = tamanhoSenha;
const botoes = document.querySelectorAll(".parametro-senha-botao");
const campoSenha = document.querySelector("#campo-senha");
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
botoes[1].onclick = aumentartamanho;
geraSenha();

botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentartamanho
function diminuirTamanho(){
    if(tamanhoSenha>6){
    tamanhoSenha=tamanhoSenha-1;
    numeroSenha.textContent=tamanhoSenha;
}
}

function aumentartamanho(){
    if(tamanhoSenha<6){
    tamanhoSenha=tamanhoSenha+1;
    numeroSenha.textContent=tamanhoSenha;
    }
}
function geraSenha(){
    let senha = "";
    for(let i=0;i<tamanhoSenha; i++){
let numeroAleatorio = Math.random()*letrasMaiusculas.length;
numeroAleatorio = Math.floor(numeroAleatorio);
senha = senha + letrasMaiusculas[numeroAleatorio];

 

}
campoSenha.value = senha;
}

