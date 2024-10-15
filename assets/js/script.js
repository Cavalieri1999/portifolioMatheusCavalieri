//configurando modo claro e modo escuro
const documento = document.body
const inputMode = document.querySelector('.input-mode');

inputMode.addEventListener('click', function (e) {
    if (inputMode.checked === true) {
        documento.classList.toggle('dark')
    }
    else {
        documento.classList.remove('dark')
    }
});

var telefone = documento.querySelector('.telefone');

telefone.addEventListener('input', () => {
    var limpaValor = telefone.value.replace(/\D/g, "").substring(0, 11);

    var numerosArray = limpaValor.split("");

    var numeroFormatado = "";

    if (numerosArray.length > 0){
        numeroFormatado += `(${numerosArray.slice(0,2).join("")})`
    }

    if(numerosArray.length>2){
        numeroFormatado += `${numerosArray.slice(2,7).join("")}`
    }
    if(numerosArray.length>2){
        numeroFormatado += `- ${numerosArray.slice(7,11).join("")}`
    }

        telefone.value = numeroFormatado;
})