const productList = [{
    productId: 1,
    title: 'Maldives Family Package',
    description: '',
    hotel: '3 Star Hotel - Breakfast, Lunch & Dinner',
    flight: 'Return speedboat',
    date: '3 Nights / 4 Days',
    imageUrl: 'images/Family Package.jpeg',
    price:  '$2,700',
}, {
    productId: 2,
    title: 'Stayhere Paris - Couple Package',
    description: '',
    hotel: '4 stars / 4-course dinner',
    flight: 'ARN - GDN ',
    date: 'Tue, Dec 24 - Fri, Jan 3',
    imageUrl: 'images/paris package 2.jpg',
    price:  ' $1,263',
}, {
    productId: 3,
    title: 'James Bond Island Day Trip with Sea Canoeing',
    description: '',
    hotel: 'A guided tour ',
    flight: 'ARN - HKT',
    date: 'Sun, Feb 24 - Fri, Mar 3',
    imageUrl: 'images/bkk package.jpg',
    price:  ' $3,600', 
}, {
    productId: 4,
    title: 'Mountain Adventure Trek / Special offer',
    description: '',
    hotel: 'Experience the thrill of hiking.',
    flight: 'ARN - TAZ',
    date: 'Tue, Jan 6- Fri, Jan 23',
    imageUrl: 'images/images mountain group.jpeg',
    price:  '$2,900', 
}]

const renderList = (itemType, itemList) => {
    const productListHtml = document.getElementById(itemType)
    itemList.forEach((item) => {
        const itemHtml = document.createElement('div')
        itemHtml.classList.add('destination')

        const image = document.createElement('img')
        image.classList.add('img')
        image.src = item.imageUrl

        const textContent = document.createElement('div')

        const title = document.createElement('div')
        title.innerHTML = item.title
        title.classList.add('package-title')

        const hotelIcon = document.createElement('i')
        hotelIcon.classList.add('fas', 'fa-home', 'icon')
        const hotel = document.createElement('p')
        hotel.append(hotelIcon)
        hotel.append(item.hotel)
        hotel.classList.add('hotel', 'para')
        
        const flightIcon = document.createElement('i')
        flightIcon.classList.add('fas', 'fa-plane', 'icon')
        const flight = document.createElement('p')
        flight.append(flightIcon)
        flight.append(item.flight)
        flight.classList.add('flight', 'para')

        const dateIcon = document.createElement('i')
        dateIcon.classList.add('fas', 'fa-calendar', 'icon')
        const date = document.createElement('p')
        date.append(dateIcon)
        date.append(item.date)
        date.classList.add('date', 'para')

        const price = document.createElement('h3')
        price.innerHTML = item.price
        price.classList.add('price', 'para')

        textContent.append(title)
        textContent.append(hotel)
        itemHtml.append(image)
        itemHtml.append(textContent)
        textContent.append(flight)
        textContent.append(date)
        textContent.append(price)

        if (itemType === 'product-list') {
            const addToCartButton = document.createElement('button')
            addToCartButton.classList.add('cart-button', 'btn')
            addToCartButton.innerHTML = 'Add to cart'
            addToCartButton.addEventListener('click', () => {
                addToCart(getProductById(item.productId))
                document.getElementById('cart-total').innerHTML = getTotalCartItems()
                alert('Added to cart')
            }) 
            itemHtml.append(addToCartButton)
        }

        productListHtml.append(itemHtml)
    })     

}

const getProductById = (productId) => productList.find((item) => item.productId === productId)

const addToCart = (productItem) => {
    let cartItems = JSON.parse(window.localStorage.getItem('cartItems'))
    if (!cartItems) {
        cartItems = []     
    } 
    cartItems.push(productItem) 
    window.localStorage.setItem('cartItems', JSON.stringify(cartItems))
}

const emptyCart = () => {
    window.localStorage.setItem('cartItems', JSON.stringify([])) 
}

const getTotalCartItems = () => {
    const cartItems = JSON.parse(window.localStorage.getItem('cartItems'))
    return cartItems.length  
}

const getCartItems = () => {
    return JSON.parse(window.localStorage.getItem('cartItems'))
}

document.addEventListener('DOMContentLoaded', () => {
     const newsletterForm = document.getElementById('newsletter-form')
     newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault()
        alert('Thank you for subscribing!')
     })
})

// const productItem2 = getProductById(2)
// const productItem1 = getProductById(1)

// addToCart(productItem1)
// addToCart(productItem2)

  