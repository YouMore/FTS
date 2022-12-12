
var favouritesNumber = document.querySelector('.favourites-number');
var likeButtons = document.querySelectorAll('.add-to-favorites');
likeButtons?.forEach((div) => {
    div.addEventListener('click', function() {
        if (div.classList.contains('block_like')) {
            favouritesNumber.innerHTML = Number(favouritesNumber.innerHTML) - 1;
        } else {
            favouritesNumber.innerHTML = Number(favouritesNumber.innerHTML) + 1;
        }
        div.classList.toggle('block_like');
        div.classList.toggle('block_not_like');
    });
});