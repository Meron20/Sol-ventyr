const renderPackages = () => {
    const productListHtml = document.getElementById('product-list')
    productList.forEach((item) => {
        const itemHtml = document.createElement('div')
        itemHtml.classList.add('destination')

        const image = document.createElement('img')
        image.classList.add('img')
        image.src = item.imageUrl

        const textContent = document.createElement('div')


        const title = document.createElement('div')
        title.innerHTML = item.title
        title.classList.add('paris')

        const hotelIcon = document.createElement('i')
        hotelIcon.classList.add('fas', 'fa-home')
        const hotel = document.createElement('p')
        hotel.innerHTML = item.hotel
        hotel.classList.add('hotel', 'para')
        hotel.append(hotelIcon)
        

        const flight = document.createElement('p')
        flight.innerHTML = item.flight
        flight.classList.add('flight', 'para')

        const date = document.createElement('p')
        date.innerHTML = item.date 
        date.classList.add('date', 'para')

        const price = document.createElement('h3')
        price.innerHTML = item.price
        price.classList.add('price', 'para')



        const addToCartButton = document.createElement('button')
        addToCartButton.classList.add('cart-button')
        addToCartButton.innerHTML = 'Add to cart'
        addToCartButton.addEventListener('click', () => {
            console.log('hello', item.productId)
            addToCart(getProductById(item.productId))
            document.getElementById('cart-total').innerHTML =getTotalCartItems()

        }) 

        textContent.append(title)
        textContent.append(hotel)
        itemHtml.append(image)

        textContent.append(flight)
        textContent.append(price)
        itemHtml.append(addToCartButton)
        productListHtml.append(itemHtml)
        itemHtml.append(textContent)
    })     

}
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('cart-total').innerHTML =getTotalCartItems()
    renderPackages()
    
});