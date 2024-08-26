const numeroSenha = document.queryselector('.parametro-senha-texto');
let tamanhoSenha = 12;
numeroSenha.textcontent = tamanhoSenha;
const botoes = document.querySelector('.parametro-senha-botoes');
botoes[0].onclick = diminuirTamanho;
