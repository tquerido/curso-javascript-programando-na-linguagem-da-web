var botaoAdicionar = document.querySelector("#buscar-pacientes");

//tecnica AJAX - requisicao com javascript de modo assincrono. De modo sem travar o javascript, sem precisar utilizar o navegador.
botaoAdicionar.addEventListener("click", function(){
    //O XMLHttpRequest é um objeto do JS responsável por fazer requisições HTTP. O trecho XML do nome indica que ele era utilizado anteriormente para realizar o transporte de dados do tipo XML, no entanto, atualmente ele consegue trafegar outros tipos de dados, como textos.
    //json - javascript object notation
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status === 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach( function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
        
    });
    xhr.send();
});