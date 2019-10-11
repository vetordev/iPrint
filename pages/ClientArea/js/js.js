function showCard() {
    var card = document.getElementById('card-confirm');
    var filter = document.getElementById('body-filter');
    filter.style.display = 'flex';
    card.style.display = 'block';
}
function filterHidden() {
    var card = document.getElementById('card-confirm');
    var filter = document.getElementById('body-filter');
    filter.style.display = 'none';
    card.style.display = 'none';
}