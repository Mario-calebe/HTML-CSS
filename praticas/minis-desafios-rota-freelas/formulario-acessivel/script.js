const form = document.querySelector('form.formulario')
const requiredInputs = form.querySelectorAll('[required]')
const mensagens = {
    name:{
        valueMissing: "Insira seu nome"
    },
    email:{
        valueMissing: "Insira um E-mail",
        typeMismatch: "Insira um E-mail válido. Ex: pedro23@gmail.com"
    },
    zap:{
        valueMissing: "Insira seu WhatsApp com DDD",
        patternMismatch: "Insira um WhatsApp válido. Ex: (62) 43215-5678"
    },
    servico:{
        valueMissing: "Escolha um serviço acima"
    },
    termos:{
        valueMissing: "Aceite os termos para agendar"
    }  
}
form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
        e.preventDefault()
        requiredInputs.forEach(input => {
            let p = document.getElementById(`${input.id}-erro`)
            p.textContent = ''
            input.removeAttribute('aria-invalid')
            if (input.validity.valueMissing) {
                p.textContent = mensagens[input.id].valueMissing
            }
            if (input.validity.typeMismatch) {
                p.textContent = mensagens[input.id].typeMismatch
            }
            if (input.validity.patternMismatch) {
                p.textContent = mensagens[input.id].patternMismatch
            }
            if (!input.validity.valid) {
                input.setAttribute('aria-invalid', true)
            }
        });
        form.querySelector(':invalid').focus()
    }
})