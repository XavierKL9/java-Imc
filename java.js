/*declarando variaveis*/
let altura;
let peso;
let imc;

/*criando uma função para calculo imc*/
function calcImc() {
    let altura = (document.getElementById("al").value) / 100;
    let peso = document.getElementById("ps").value
    altura = parseFloat(altura);
    peso = parseFloat(peso);
    let imc = peso / (altura * altura);
    window.alert("seu imc É: " + imc)

}
function alternarTemas(){
    const corpo = document.body; //corpo do html
    corpo.classList.toggle("escuro");
    corpo.classList.toggle("claro");
}

