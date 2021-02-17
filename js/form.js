//Existe um comportamento padrao do botao, que e enviar o form e recarregar a pagina.
//event - carinha que controla o evento, nesse caso o click, que vai enviar o fomr e recarregar a pagina
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault(); //previne um comportamento padrao
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    
    var erros = validaPaciente(paciente);
    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }
    
    adicionaPacienteNaTabela(paciente);
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

//innerHtml - controla o html interno de um elemento
function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){
    //criando um Objeto
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(peso,altura)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    return td;
}

function validaPaciente(paciente){
    var erros = [];
    
    if(paciente.nome.length === 0){
        erros.push("O nome nao pode ser em branco!");
    }
    if(paciente.gordura.length === 0){
        erros.push("A gordura nao pode ser em branco!");
    }
    if(paciente.peso.length === 0){
        erros.push("O peso nao pode ser em branco!");
    }
    if(paciente.altura.length === 0){
        erros.push("A altura nao pode ser em branco!");
    }
    if(!validaPeso(paciente.peso)){
        erros.push("Peso invalido!");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("Altura invalida!");

    }
    return erros;
}