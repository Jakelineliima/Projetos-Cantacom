const exibir1 = document.querySelector('.resp1')
const exibir2 = document.querySelector('.resp2')
const exibir3 = document.querySelector('.resp3')
const exibir4 = document.querySelector('.resp4')
const exibir5 = document.querySelector('.resp5')
const seta1 = document.querySelector('.setapergunta1')
const seta2 = document.querySelector('.setapergunta2')
const seta3 = document.querySelector('.setapergunta3')
const seta4 = document.querySelector('.setapergunta4')
const seta5 = document.querySelector('.setapergunta5')

abrir_fechar = () => {
    if (exibir1.style.display == 'block') {
        exibir1.style.display = 'none'
        seta1.style.transform = "rotate(" + 0 + "deg)"
        
    } else {
        exibir1.style.display = 'block'
        seta1.style.transform = "rotate(" + 180 + "deg)"
    }
}

abrir_fechar2 = () => {
    if (exibir2.style.display == 'block') {
        exibir2.style.display = 'none'
        seta2.style.transform = "rotate(" + 0 + "deg)"
    } else {
        exibir2.style.display = 'block'
        seta2.style.transform = "rotate(" + 180 + "deg)"
    }
}

abrir_fechar3 = () => {
    if (exibir3.style.display == 'block') {
        exibir3.style.display = 'none'
        seta3.style.transform = "rotate(" + 0 + "deg)"
    } else {
        exibir3.style.display = 'block'
        seta3.style.transform = "rotate(" + 180 + "deg)"
    }
}

abrir_fechar4 = () => {
    if (exibir4.style.display == 'block') {
        exibir4.style.display = 'none'
        seta4.style.transform = "rotate(" + 0 + "deg)"
    } else {
        exibir4.style.display = 'block'
        seta4.style.transform = "rotate(" + 180 + "deg)"
    }
}

abrir_fechar5 = () => {
    if (exibir5.style.display == 'block') {
        exibir5.style.display = 'none'
        seta5.style.transform = "rotate(" + 0 + "deg)"

    } else {
        exibir5.style.display = 'block'
        seta5.style.transform = "rotate(" + 180 + "deg)"
    }
}