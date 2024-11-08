const Button = document.querySelector('button')
const modal = document.querySelector('dialog')
const closeModal = document.querySelector('dialog span')
let botao = document.querySelector('#botao')

Button.onclick = function () {
    modal.showModal()
}


closeModal.onclick = function () {
    modal.close()
}


function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('open');
}

function closeMenu() {
    const menu = document.querySelector('#menu');
    menu.classList.remove('open');
}

function abrirModal() {
    document.querySelector('#modal').classList.add('active');
}

function fecharModal() {
    document.querySelector('#modal').classList.remove('active');
}

function handleLogin(event) {
    window.location.href = "cadastro.html";
}

botao.addEventListener('click', 
   async()=>{
      let usuario = document.querySelector('#usuario').value
      let senha = document.querySelector('#senha').value
     
     if(usuario != "" && senha != "" ){
     
      let resposta = await fetch(`http://localhost:3000/login/${usuario}/${senha}`)
      if(resposta.status == 200)
         {
         alert('Bem vindo')
      }
      else{
         alert('Usuario ou senha incorreta')
      }
     }
else{
   alert('Preencha todos os campos')
}
          
   }
)