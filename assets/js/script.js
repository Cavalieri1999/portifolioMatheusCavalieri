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

var nome = documento.querySelector('.inputNome');
var sobrenome = documento.querySelector('.inputSobrenome');
var email = documento.querySelector('.inputEmail');
var mensagem = documento.querySelector('.mensagem')
var telefone = documento.querySelector('.telefone');
var submit = documento.querySelector('.submit')


telefone.addEventListener('input', () => {
    var limpaValor = telefone.value.replace(/\D/g, "").substring(0, 11);

    var numerosArray = limpaValor.split("");

    var numeroFormatado = "";

    if (numerosArray.length > 0) {
        numeroFormatado += `(${numerosArray.slice(0, 2).join("")})`
    }

    if (numerosArray.length > 2) {
        numeroFormatado += `${numerosArray.slice(2, 7).join("")}`
    }
    if (numerosArray.length > 2) {
        numeroFormatado += `- ${numerosArray.slice(7, 11).join("")}`
    }

    telefone.value = numeroFormatado;
})


submit.addEventListener('click', () => {
    var erro = false;
    if (!isNaN(nome.value || nome.value == "")) {
        console.log('O nome nao pode ser um numero');
        nome.style.color = 'red'
        erro = true;
    }
    if (!isNaN(sobrenome.value || nome.value == "")) {
        console.log('O sobrenome nao pode ser um numero');
        sobrenome.style.color = 'red'
        erro = true;
    }
    if (email.value.length <= 10) {
        console.log('O email é muito curto');
        erro = true;
    }
    if (erro == true) {
        console.log('Ta com erro');
    }
    else {
        console.log('Agora deu bom');
    }

});


var seta = document.querySelector('.seta')
var sectionContato = document.querySelector('#contato')
seta.addEventListener('click', function () {
    sectionContato.scrollIntoView({
        behavior: 'smooth'
    });
});

var html = document.querySelector('.html');
var modalHtml = document.querySelector('.modalHTML')
var buttonClose = document.querySelector('.fechar');

html.addEventListener('click', () => {
    modalHtml.show();
    modalCss.close();
    modalJs.close();
    modalFigma.close();
    modalCs.close();
    modalSql.close();

});

var modalCss = document.querySelector('.modalCss');
var css = document.querySelector('.css');

css.addEventListener('click', () => {
    modalCss.show();
    modalHtml.close();
    modalJs.close();
    modalFigma.close();
    modalCs.close();
    modalSql.close();
});

var modalJs = document.querySelector('.modalJs');
var js = document.querySelector('.js');

js.addEventListener('click', () => {
    modalCss.close();
    modalHtml.close();
    modalJs.show();
    modalFigma.close();
    modalCs.close();
    modalSql.close();
});


var modalFigma = document.querySelector('.modalFigma');
var figma = document.querySelector('.figma');

figma.addEventListener('click', () => {
    modalCss.close();
    modalHtml.close();
    modalJs.close();
    modalFigma.show();
    modalCs.close();
    modalSql.close();
});

var modalCs = document.querySelector('.modalCs');
var cs = document.querySelector('.cs')

cs.addEventListener('click', () => {
    modalCss.close();
    modalHtml.close();
    modalJs.close();
    modalFigma.close();
    modalCs.show();
    modalSql.close();
});

var modalSql = document.querySelector('.modalSql');
var sql = document.querySelector('.sql')

sql.addEventListener('click', () => {
    modalCss.close();
    modalHtml.close();
    modalJs.close();
    modalFigma.close();
    modalCs.close();
    modalSql.show();
});



const target = document.querySelectorAll('[data-anima]')
const animationClass = 'animacao';

function animaScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
            console.log('funcionou aqui chefe')
        }
        else element.classList.remove(animationClass);
    })
}


document.addEventListener('scroll', (e) => {
    animaScroll();
})