const modalButton = document.querySelector('.btn-primary[data-bs-toggle="modal"]'); 
const modal = document.getElementById('exampleModal'); 
function openModal() {
  modal.classList.add('show'); 
}
function closeModal() {
  modal.classList.remove('show'); 
}
modalButton.addEventListener('click', openModal);
const buyButton = document.querySelector('.modal-footer button.btn-primary'); 
buyButton.addEventListener('click', () => {
  alert('¡Gracias por su compra!');
});
