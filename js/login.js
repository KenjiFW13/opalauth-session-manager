





const botaoEnviar = document.querySelector("#btn-entrar");

botaoEnviar.addEventListener("click", validaCampo);

function validaCampo() {
  const campoSenha = document.getElementById("input-senha");
  const valorCampo = parseInt(campoSenha.value, 10);

  console.log(valorCampo % 2 === 0);

  const valorHash = valorCampo ** 2;
  console.log(valorHash);
}









