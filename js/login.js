

const botaoEnviar = document.querySelector("#btn-entrar");

//botaoEnviar.addEventListener("click", function(){
//  console.log("Teste")
//});


function validaCampo(){
// Capturando os dados do campo SENHA:
const campoSenha = document.getElementById("Input-senha");
let valorCampo = parseInt (campoSenha.value)

// Verificando se a senha é PAR
console.log(valorCampo % 2 == 0);

// Simulação de HASH

const valorHash = valorCampo**2;
console.log(valorHash);
}

const botaoEnviar = document.querySelector("#btn-entrar");
botaoEnviar.addEventListener("click",function(){console.log('TESTE')});


function validaCampo(){
const campoSenha = document.getElementById("input-senha");
let valorCampo = parseInt (campoSenha.value);
}

console.log(valorCampo % 2 == 0);


const valorHash = valorCampo ** 2;
console.log(valorHash);

 feature/tarefa-02-hashing
const botaoEnviar = document.querySelector("#btn-entrar")

//botaoEnviar.addEventListener( "click" , function() {
 //   console.log("TESTE")
//} )

function validaCampo(){
    // Capturando os dados do campo senha:
const campoSenha = document.getElementById("input-senha");
let valorCampo = parseInt(campoSenha.value);




//Verificando se a senha é par
console.log(valorCampo %2 == 0);

botaoEnviar.addEventListener( "click" , validaCampo());

//simulação de hash

const valorHash = valorCampo**2 ;
console.log(valorHash);

}

const botaoEnviar = document.querySelector("#btn-enviar");

// botaoenviar.addEventListener("click", function() {
//     console.log("TESTE")
// });

botaoEnviar.addEventListener("click", validaCampo);

function validaCampo() {
    // Capturando os dados do campo SENHA:
    const campoSenha = document.getElementById("input-senha");
    const valorCampo = Number(campoSenha.value);

    // Verifica se o valor é um número válido antes de prosseguir
    if (Number.isNaN(valorCampo)) {
        console.log("Valor de senha inválido.");
        return;
    }

    // Verificando se a senha é PAR:
    console.log(valorCampo % 2 === 0);
}

// Capturando os dados do campo SENHA:


const botaoEnviar = document.querySelector("#btn-entrar");

botaoEnviar.addEventListener("click", validaCampo);

function validaCampo(){
    const campoSenha = document.getElementById("input-senha");
    let valorCampo = parseInt(campoSenha.value);


    console.log(valorCampo % 2 == 0);


    // Simulacao de HASH
    const valorHash = valorCampo**
    console.log(valorHash);


}



 develop

