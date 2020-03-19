const modalBtn = document.querySelectorAll('.modalBtn');
const modalContent = document.querySelectorAll('[data-modal]');
const closeBtn = document.querySelectorAll('.closeBtn');

modalContent.forEach(e => {
	console.log(e.dataset.modal);
})

modalBtn.forEach(element => {
  element.addEventListener('click', (e)=>{
    showModal(e);

  })
});

closeBtn.forEach(element => {
  element.addEventListener('click', (e)=>{
    closeModal(e);
  });
});

window.addEventListener('click', closeOpenedModal);

function showModal(modalToShow){
  modalContent.forEach(e => {
    if (e.dataset.modal == `#${modalToShow.target.id}`) {
        e.style.display = 'block';
    }
  })
}

function closeModal(modalToHide){
  modalToHide.target.closest('.modal').style.display = 'none';
}

function closeOpenedModal(e){
  modalContent.forEach(element => {
    if (element.closest('.modal').style.display === 'block' && element.dataset.modal ==   e.target.dataset.modal) {
      element.style.display = 'none';
    }
  });
}


let year = new Date();
document.getElementById('date').innerHTML = year.getFullYear();