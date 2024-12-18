const renderPackages = () => {
    renderList('cart-list', getCartItems())

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