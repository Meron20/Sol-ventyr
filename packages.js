const renderPackages = () => {
    const productListHtml = document.getElementById('product-list')
    productList.forEach((item) => {
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



        const addToCartButton = document.createElement('button')
        addToCartButton.classList.add('cart-button')
        addToCartButton.innerHTML = 'Add to cart'
        addToCartButton.addEventListener('click', () => {
            console.log('hello', item.productId)
            addToCart(getProductById(item.productId))
            document.getElementById('cart-total').innerHTML =getTotalCartItems()

        }) 

        itemHtml.append(image)
        itemHtml.append(title)
        itemHtml.append(hotel)
        itemHtml.append(flight)
        itemHtml.append(price)
        itemHtml.append(addToCartButton)
        productListHtml.append(itemHtml)
    })     

}
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('cart-total').innerHTML =getTotalCartItems()
    renderPackages()
    
});