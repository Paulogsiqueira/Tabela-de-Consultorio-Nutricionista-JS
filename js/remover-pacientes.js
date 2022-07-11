var pacientes = document.querySelectorAll(".paciente");

var tabela =document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){
    var paiDoAlvo=event.target.parentNode;

    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function(){
    paiDoAlvo.remove();
    },500);

});
