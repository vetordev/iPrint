window.onload = function load() {
    // alert('function, io');
    this.loadWishes(['Impressora3D,R$2980', 'Scanner,R$700']);
}

function loadWishes(wishes) {
    var products = document.getElementById('products');
    var msgNull = document.getElementById('text-null');
    var productsTr = document.getElementById('products-tr');
    var productsTable = document.getElementById('products-table');


    for (i = 0; i < wishes.length; i++) {
        var wishInfos = wishes[i].split(',');

        var wishDesc = wishInfos[0];
        var wishPrice = wishInfos[1];

        // alert(wishDesc)
        // alert(wishPrice)
        msgNull.style.display = 'none';

        // productsTr.innerHTML += "<div class='cardp'><p class='desc'>"+wishDesc+"</p><p class='price'>"+wishPrice+"</p></div></div>";
        
        if (i == 4){
            productsTable.innerHTML += "<tr id  ='products-tr'><td><div class='cardp'><div class='div-flex flex-exception'><img class='product-image' src='../../img/no-image-default.png'></div><p class='desc'><a href='*'>"+wishDesc+"</a></p><p class='price'>"+wishPrice+"</p><div class='div-flex flex-exception'><button type='button' class='btn-add-car'>Adicionar ao carrinho</button></div></div></td></tr>"
        }
        else productsTr.innerHTML += "<td><div class='cardp'><div class='div-flex flex-exception'><img class='product-image' src='../../img/no-image-default.png'></div><p class='desc'><a href='*'>"+wishDesc+"</a></p><p class='price'>"+wishPrice+"</p><div class='div-flex flex-exception'><button type='button' class='btn-add-car'>Adicionar ao carrinho</button></div></div></td>"
        // productsTable.innerHTML += "<td><div class='cardp'><div class='div-flex flex-exception'><img class='product-image' src='../../img/no-image-default.png'></div><p class='desc'><a href='*'>"+wishDesc+"</a></p><p class='price'>"+wishPrice+"</p><div class='div-flex flex-exception'><button type='button' class='btn-add-car'>Adicionar ao carrinho</button></div></div></td>";
        // alert(i);

    }   
}