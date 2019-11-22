window.onload = function load() {
    // alert('function, io');
    this.loadWishes(['Impressora3D,R$2980', 'Scanner,R$700', 'Ola, dsada', 'aaaa, bbbbb', 'hjghj,aaa', 'jhdjdsj,jkkkkk']);
}

function loadWishes(wishes) {
    var products = document.getElementById('products');
    var msgNull = document.getElementById('text-null');
    var productsTr = document.getElementsByClassName('products-tr');
    var productsTable = document.getElementById('products-table');


    for (i = 0; i < wishes.length -1; i++) {
        var wishInfos = wishes[i].split(',');

        var wishDesc = wishInfos[0];
        var wishPrice = wishInfos[1];

        // alert(wishDesc)
        // alert(wishPrice)
        msgNull.style.display = 'none';

        // productsTr.innerHTML += "<div class='cardp'><p class='desc'>"+wishDesc+"</p><p class='price'>"+wishPrice+"</p></div></div>";
        // alert(wishes[wishes.length-1])
        // alert(wishDesc)
        if (i == 4){
            productsTable.innerHTML += "<tr class ='products-tr'><td><div class='cardp'><div class='div-flex flex-exception'><img class='product-image' src='../../img/no-image-default.png'></div><p class='desc'><a href='*'>"+wishDesc+"</a></p><p class='price'>"+wishPrice+"</p><div class='div-flex flex-exception'><button type='button' class='btn-add-car'>Adicionar ao carrinho</button></div></div></td></tr>"
            // alert(productsTr.length -1)
        }
        else if (i != 4) productsTr[productsTr.length - 1].innerHTML += "<td><div class='cardp'><div class='div-flex flex-exception'><img class='product-image' src='../../img/no-image-default.png'></div><p class='desc'><a href='*'>"+wishDesc+"</a></p><p class='price'>"+wishPrice+"</p><div class='div-flex flex-exception'><button type='button' class='btn-add-car'>Adicionar ao carrinho</button></div></div></td>"
        // else if (i == (wishes.length))productsTr.innerHTML += "<td><div class='cardp'><div class='div-flex flex-exception'><img class='product-image' src='../../img/no-image-default.png'></div><p class='desc'><a href='*'>aaaaaaaa</a></p><p class='price'>aaaaaaaaa</p><div class='div-flex flex-exception'><button type='button' class='btn-add-car'>Adicionar ao carrinho</button></div></div></td>"
        // productsTable.innerHTML += "<td><div class='cardp'><div class='div-flex flex-exception'><img class='product-image' src='../../img/no-image-default.png'></div><p class='desc'><a href='*'>"+wishDesc+"</a></p><p class='price'>"+wishPrice+"</p><div class='div-flex flex-exception'><button type='button' class='btn-add-car'>Adicionar ao carrinho</button></div></div></td>";
        // alert(i);

    }   
}