document.addEventListener('DOMContentLoaded', () => {
    const faqCard = document.querySelectorAll('.faq-card')
    console.log('hello')
    faqCard.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active')
        })
    })
})