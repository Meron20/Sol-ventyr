const renderPackages = () => {
    renderList('product-list', productList)
} 
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('cart-total').innerHTML =getTotalCartItems()
    renderPackages()
    
});