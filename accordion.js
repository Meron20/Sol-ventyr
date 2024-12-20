document.addEventListener('DOMContentLoaded', () => {
    const faqCard = document.querySelectorAll('.faq-card')
    faqCard.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('active')
        })
    })
})