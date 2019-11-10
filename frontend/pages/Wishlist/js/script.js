window.onload = function load() {
    // alert('function, io');
    this.loadWishes(['Impre2q   sadsssora3D,R$2980', 'Scanner,R$700'])
}

function loadWishes(wishes) {
    var products = document.getElementById('products');
    var msgNull = document.getElementById('text-null');

    for (i = 0; i < wishes.length; i++) {
        var wishInfos = wishes[i].split(',');

        var wishDesc = wishInfos[0];
        var wishPrice = wishInfos[1];

        // alert(wishDesc)
        // alert(wishPrice)
        msgNull.style.display = 'none';

        // products.innerHTML += "<div class='cardp'><p class='desc'>"+wishDesc+"</p><p class='price'>"+wishPrice+"</p></div></div>";
        products.innerHTML += "<div class='cardp'><div class='div-flex flex-exception'><img class='product-image' src='../../img/no-image-default.png'></div><p class='desc'><a href='*'>"+wishDesc+"</a></p><p class='price'>"+wishPrice+"</p><div class='div-flex flex-exception'><button type='button' class='btn-add-car'>Adicionar ao carrinho</button></div></div>"
    }   
}