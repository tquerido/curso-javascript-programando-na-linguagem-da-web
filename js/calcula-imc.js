var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//seletor de classe "."
//seletor de id "#"
//querySelector sempre retorna 1 elemento
//querySelector retorna lista da classe
//toFixed limita as casas decimais
//style modifica o css aplicado
//background-color deve ser escrito como backgroundColor. Quando a gente quer modificar uma propriedade que tem duas palavras, nao pode usar hifen... tem que usar o padrao camel case.
//classList retorna todas as classes daquele objeto
//add adiciona uma nova classe a aquele objeto
//addEventListener ouve evento em um determinado elemento
var pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    if (!pesoEhValido) {
        console.log("Peso invalido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso invalido!";
        paciente.classList.add("paciente-invalido");
    }
    
    if (!alturaEhValida) {
        console.log("Altura invalida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura invalida!";
        paciente.classList.add("paciente-invalido");
    }
    
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <=3.00){
        return true;
    }
    return false;
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}


//###########################################################################
//utilizando funcao anonima, quando a chamada so existe nesse conceito.
titulo.addEventListener("click", function (){
    console.log("Ola, eu fui clicado. Ass: funcao anonima : ) .");
});

//funcao nomeada
// function mostraMensagem(){
//     console.log("Ola, eu fui clicado!");
// }