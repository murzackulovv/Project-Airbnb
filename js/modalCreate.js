import { Modal } from "./modal.js"

export const ModalCreat = () => {
  const { modalTitle, modalBtn, modalContainer  } = Modal()


  modalTitle.textContent = 'Create House'
  modalBtn.textContent = 'Creat'

  document.addEventListener('click', (e) =>{
    if(e.target == modalContainer){
      modalContainer.remove()
    }
  })
  document.body.append(modalContainer)
}