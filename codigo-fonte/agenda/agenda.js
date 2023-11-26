function iniciaModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalId){
            modal.classList.remove('mostrar')
        }
    });
}
const img = document.getElementById('button')
const aula = document.querySelectorAll("#aula-box")
aula.forEach(value=>{
    value.addEventListener('click', () =>iniciaModal('modal-id'));
})