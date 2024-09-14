// Script para o Botão Voltar ao Topo

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

document.getElementById('backToTopBtn').addEventListener('click', function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Script para o Modal da Galeria
const galleryModal = document.getElementById('galleryModal');
galleryModal.addEventListener('show.bs.modal', function (event) {
  const button = event.relatedTarget;
  const imageSrc = button.getAttribute('data-bs-image');
  const modalImage = galleryModal.querySelector('#galleryModalImage');
  modalImage.src = imageSrc;
});

// Inicialização do Owl Carousel para Depoimentos
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
  });
});

// Validação e Feedback do Formulário
document.getElementById('contactForm').addEventListener('submit', function(event){
  event.preventDefault();

  // Obter valores do formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const assunto = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value;

  // Validação simples do formulário
  if(nome && email && assunto && mensagem){
    // Mostrar mensagem de sucesso usando SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Mensagem Enviada!',
      text: 'Entraremos em contato em breve.',
      confirmButtonColor: '#003399'
    });

    // Resetar formulário
    document.getElementById('contactForm').reset();
  } else {
    // Mostrar mensagem de erro
    Swal.fire({
      icon: 'error',
      title: 'Erro!',
      text: 'Por favor, preencha todos os campos.',
      confirmButtonColor: '#003399'
    });
  }
});

