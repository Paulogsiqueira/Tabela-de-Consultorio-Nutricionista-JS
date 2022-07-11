var titulo = (document.querySelector(".titulo"));
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente")

for( i=0; i< pacientes.length; i++){

    paciente = pacientes[i]; 

    var tdPeso= paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura= paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido){
        console.log("Peso Inválido!")
        pesoValido = false;
        paciente.classList.add("paciente-invalido")
        tdImc.textContent = "Peso Inválido";
    }

    if(!alturaValida){
        console.log("Altura Inválida!")
        alturaValida = false;
        paciente.classList.add("paciente-invalido")
        tdImc.textContent = "Altura Inválida";
    }

    if( alturaValida == true && pesoValido ==true){
        tdImc.textContent = calculaImc(peso, altura);
    
    } else {

    }
}
function validaPeso(peso){
    if( peso > 0 && peso < 300){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if( altura > 0 && altura<3.00){
        return true;
    } else {
        return false;
    }
}

function calculaImc (peso,altura){
    var imc = 0;
    imc = (peso / (altura * altura));

    return imc.toFixed(2);
};


