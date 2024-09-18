//configurando modo claro e modo escuro
const documento = document.body
const inputMode = document.querySelector('.input-mode');

inputMode.addEventListener('click', function(e){
    if (inputMode.checked === true){
        documento.classList.toggle('dark')
    }
    else{
        documento.classList.remove('dark')
    }
})