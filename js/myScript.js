
const form = document.getElementById("form");
const username = document.getElementById("username")
const endereco = document.getElementById("endereco")
const cep = document.getElementById("cep")
const bairro = document.getElementById("bairro")
const dataNascimento = document.getElementById("dataNascimento")
const vendedor = document.getElementById("vendedor")
const limiteCredito = document.getElementById("limiteCredito")
;

function username() {
if (!username.value || !id.value || !endereco.value || !cep.value || !bairro.value || !dataNascimento.value || !vendedor.value || !limiteCredito.value) {
  throw "Todos os campos devem ser preenchidos";
}

if (!/^[a-zA-Z]+$/.test(username.value)) {
  throw "Digite um nome válido";
}
}

function id(){

  if (!/^\d+$/.test(id.value)) {
    throw "Digite apenas números";
  }

}

function cep(){
  if (!/^\d{5}-\d{3}$/.test(cep.value)) {
    throw "CEP inválido";
  }
}

function bairro(){
  if (!/^[a-zA-Z]+$/.test(bairro.value)) {
    throw "Digite apenas letras";
  }
}

function vendedor(){

  if (!/^\d+$/.test(id.value)) {
    throw "Digite apenas letras";
  }

}

      
      document.cookie = "username=" + username.value;
      document.cookie = "id=" + id.value;
      document.cookie = "cep=" + cep.value;
      document.cookie = "endereco=" + endereco.value;
      document.cookie = "bairro=" + bairro.value;
      document.cookie = "dataNascimento=" + dataNascimento.value;
      document.cookie = "vendedor=" + vendedor.value;
      document.cookie = "limiteCredito=" + limiteCredito.value;

      alert("Cadastro concluído!"); 
    