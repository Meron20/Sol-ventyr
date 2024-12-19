const renderPackages = () => {
    const cartItems = getCartItems()   
    renderList('cart-list', cartItems)
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