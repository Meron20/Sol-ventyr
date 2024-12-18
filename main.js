const productList = [{
    productId: 1,
    title: 'Maldives Family Package',
    description: '',
    hotel: '3 Star Hotel - Breakfast, Lunch & Dinner',
    flight: 'Return speedboat Airport Pick up & Drop Transfers',
    date: '3 Nights / 4 Days',
    imageUrl: 'images/Family Package.jpeg',
    price:  '$2,700',
}, {
    productId: 2,
    title: 'Stay here Paris - Couple Package / Maarif -Elite Hotel + Flight',
    description: 'Evening cruise time leaves the day free for other must-do activities',
    hotel: '4 stars / 4-course dinner',
    flight: 'ARN - GDN ',
    date: 'Tue, Dec 24 - Fri, Jan 3',
    imageUrl: 'images/paris package 2.jpg',
    price:  ' $1,263',
}, {
    productId: 3,
    title: 'James Bond Island Day Trip with Sea Canoeing',
    description: 'A guided tour to the highlights of Phang Nga Bay including mangroves and sea canoeing',
    hotel: '4 stars / 4-course dinner',
    flight: 'ARN - HKT',
    date: 'Sun, Feb 24 - Fri, Mar 3',
    imageUrl: 'images/bkk package.jpg',
    price:  ' $3,600', 
}, {
    productId: 4,
    title: 'James Bond Island Day Trip with Sea Canoeing',
    description: 'A guided tour to the highlights of Phang Nga Bay including mangroves and sea canoeing',
    hotel: '4 stars / 4-course dinner',
    flight: 'ARN - TAZ',
    date: 'Tue, Jan 6- Fri, Jan 23',
    imageUrl: 'images/hiking.webp',
    price:  '$2,900', 
}]


const renderList = (listType, itemList) => {
    const productListHtml = document.getElementById(listType)
    itemList.forEach((item) => {
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
        flight.classList.add('flight-info')

        const date = document.createElement('p')
        date.innerHTML = item.date 
        date.classList.add('date-info')

        const price = document.createElement('h3')
        price.innerHTML = item.price
        price.classList.add('price-info')

        const addToCartButton = document.createElement('button')

        if (listType === 'product-list') {
            addToCartButton.classList.add('cart-button')
            addToCartButton.innerHTML = 'Add to cart'
            addToCartButton.addEventListener('click', () => {
                console.log('hello', item.productId)
                addToCart(getProductById(item.productId))
                document.getElementById('cart-total').innerHTML =getTotalCartItems()
            }) 
        }
        
        itemHtml.append(image)
        itemHtml.append(title)
        itemHtml.append(hotel)
        itemHtml.append(flight)
        itemHtml.append(price)
        itemHtml.append(addToCartButton)
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


// const productItem2 = getProductById(2)
// const productItem1 = getProductById(1)

// addToCart(productItem1)
// addToCart(productItem2)

  
