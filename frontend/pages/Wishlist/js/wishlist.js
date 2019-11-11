window.addEventListener('load', () => {

});


const storeWishlist = (data) => {
    $.ajax({
        url : '../../../backend/source/routes.php',
        type: 'POST',
        data : {
            data: data,
            type : 'wishlist',
            method : 'store'
        }
    }).done(res => {
        try {
            res = JSON.parse(res);
            if(res === '200')
                console.log('store ok');
        } catch (error) {
            console.log(error);
        }
    });
}

const showWishlist = () => {
    $.ajax({
        url : '../../../backend/source/routes.php',
        type: 'POST',
        data : {
            type : 'wishlist',
            method : 'show'
        }

    }).done(res => {
        try {
            res = JSON.parse(res);
            if(res === '200')
                console.log('show ok');
        } catch (error) {
            console.log(error);
        }
    });
}

const destroyWishlist = (data) => {
    $.ajax({
        url : '../../../backend/source/routes.php',
        type: 'POST',
        data : {
            data : data,
            type : 'wishlist',
            method : 'destroy'
        }

    }).done(res => {
        try {
            res = JSON.parse(res);
            if(res === '200')
                console.log('destroy ok');
        } catch (error) {
            console.log(error);
        }
    });
}