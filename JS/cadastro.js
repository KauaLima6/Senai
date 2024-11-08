function clearFileInput() {
  document.getElementById('imagem-arvore').value = '';
}


function cadastrarArvore() {

  const nomeCientifico = document.querySelector('#nome-cientifico').value;
  const nomePopular = document.querySelector('#nome-popular').value;
  const imagemArvore = document.querySelector('#imagem-arvore').files[0];
  const localizacao = document.querySelector('#localizacao').value;
  const altura = document.querySelector('#altura').value;
  const tipoFolha = document.querySelector('#tipo-folha').value;
  const tipoFruto = document.querySelector('#tipo-fruto').value;


  if (!nomeCientifico || !nomePopular || !imagemArvore || !localizacao || !altura || !tipoFolha || !tipoFruto) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
  }

  alert("Árvore cadastrada com sucesso!");

  document.getElementById('form-cadastro').reset();
}


function handleLogin(event) {
  window.location.href = "index.html";
}