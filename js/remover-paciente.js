//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    
});

// pacientes.forEach(function(paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();
//     });
// });

// característica do JavaScript chamada Event Bubbling, ou "borbulhamento" de eventos. Quando escutamos um evento no JavaScript, 
// ele na verdade não acontece só no dono do evento (no nosso caso, na linha do paciente), ele acontece também no pai do paciente, 
// no pai do pai do paciente, e assim vai subindo.
