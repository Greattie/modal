const modal = document.querySelector('.modal-overlay')
const btn = document.querySelector('.btn')
const btnModal = document.querySelector('.btn-modal')

btn.addEventListener('click', function(){
   modal.classList.add('show-modal')

})


btnModal.addEventListener('click', function(){
    modal.classList.remove('show-modal')
   
})