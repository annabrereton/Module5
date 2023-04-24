document.querySelectorAll('.accordion').forEach(accordion => {
    accordion.querySelector('.header').addEventListener('click', e => {
        const accordionBody = accordion.querySelector('.accordion-body')
        const accordionSymbol = accordion.querySelector('.header span')
        accordionBody.classList.toggle('open')
        if (accordionBody.classList.contains('open')) {
            accordionSymbol.textContent = '-'
        } else {
            accordionSymbol.textContent = '+'
        }
    })
})

document.querySelector('.modal-open').addEventListener('click', e => {
    document.querySelector('.modal').classList.add('open')
})

document.querySelector('.modal-close').addEventListener('click', e => {
    document.querySelector('.modal').classList.remove('open')
})