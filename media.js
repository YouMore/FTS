var anchorTop = document.querySelector(".block_up");
anchorTop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function save_element(){
    const parsed = parent.innerHTML;
    localStorage.setItem('hiDen', parsed);
}
/*var addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
var cartNumber = document.querySelector('.cart-number');
var favouritesNumber = document.querySelector('.favourites-number');
addToCartBtns?.forEach(btn => {
    btn.onclick = function() {
        cartNumber.innerHTML = Number(cartNumber.innerHTML) + 1;
    }
});
var likeButtons = document.querySelectorAll('.add-to-favourites-btn');
likeButtons?.forEach((button) => {
    button.addEventListener('click', function() {
        if (button.classList.contains('liked')) {
            favouritesNumber.innerHTML = Number(favouritesNumber.innerHTML) - 1;
        } else {
            favouritesNumber.innerHTML = Number(favouritesNumber.innerHTML) + 1;
        }
        button.classList.toggle('liked');
        button.classList.toggle('not-liked');
    });
});*/

