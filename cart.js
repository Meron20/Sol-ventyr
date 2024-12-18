const renderPackages = () => {
    const productListHtml = document.getElementById('cart-list')
    const cartItems = getCartItems()
    cartItems.forEach((item) => {
        const itemHtml = document.createElement('div')
        itemHtml.classList.add('item')

        const image = document.createElement('img')
        image.classList.add('picture')
        image.src = item.imageUrl

        const title = document.createElement('div')
        title.innerHTML = item.title
        title.classList.add('paris')

        const hotelIcon = document.createElement('i')
        hotelIcon.classList.add('fas', 'fa-home')
        const hotel = document.createElement('p')
        hotel.innerHTML = item.hotel
        hotel.classList.add('hotel-info')
        hotel.append(hotelIcon)
        

        const flight = document.createElement('p')
        flight.innerHTML = item.flight
        flight.classList.add('flight.info')

        const date = document.createElement('p')
        date.innerHTML = item.date 
        date.classList.add('date-info')

        const price = document.createElement('h3')
        price.innerHTML = item.price
        price.classList.add('price-info')

        itemHtml.append(image)
        itemHtml.append(title)
        itemHtml.append(hotel)
        itemHtml.append(flight)
        itemHtml.append(price)
        productListHtml.append(itemHtml)
    })     

}
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('cart-total').innerHTML =getTotalCartItems()
    renderPackages()
    document.getElementById('empty-cart').addEventListener('click', () => {
        emptyCart()
        document.getElementById('cart-list').innerHTML = ''
        document.getElementById('cart-total').innerHTML = 0
    })
    
});