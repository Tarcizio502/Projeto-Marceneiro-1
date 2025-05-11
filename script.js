/*let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 1000);

function nextImage() {
  count++;
  if (count > 16) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}

document.addEventListener("DOMContentLoaded", () => {
  let nome = document.querySelector(".nome");
  let cidade = document.querySelector(".cidade");
  let telefone = document.querySelector(".telafone");
  let email = document.querySelector(".email");
  let arr = [];

  btn.addEventListener("click", () => {
    const pessoa = {
      nome: nome.value,
      cidade: cidade.value,
      telefone: telefone.value,
      email: email.value,
    };
    arr.push(pessoa);
    infos.innerHTML = ``;
    arr.forEach((elemento, index) => {
      infos.innerHTML += `
  <p>Nome: ${elemento.nome}</p>
  <p>Cidade: ${elemento.cidade}</p> 
  <p>Telefone: ${elemento.telefone}</p> 
  <p>Email: ${elemento.email}<p/> 
  `;
    });
  });
});
