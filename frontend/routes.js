const btnsLogin = [... document.querySelectorAll(".login")];
const loginForm = document.querySelector("#container-visibility");
const body = document.body;
btnsLogin.forEach(btnLogin => {
    btnLogin.addEventListener("click", event => {
        // window.location.href = "../ClientArea/index.html";
        loginForm.style.display = 'block';
        body.style.overflow = 'hidden';
        // document.style.overflow = 'hidden';
    })
});

const btnAddress = document.querySelector("#btn-address");
btnAddress.addEventListener('click', event => {
    window.location.href = "../ClientAddress/index.html";
});

const btnAccount = document.querySelector("#btn-account-edit");
btnAccount.addEventListener('click', event => {
    window.location.href = '../ClientAccount/index.html';

});
const btnEmail = document.querySelector("#btn-email");
btnEmail.addEventListener('click', event => {
    window.location.href = '../ClientEmail/index.html';
})

const logo = document.getElementsByClassName("logo");
logo[0].addEventListener('click', event => {
    window.location.href = '../Home/index.html';
});

const icoWishlist = document.querySelector("#wish-page");
icoWishlist.addEventListener('click', event => {
    window.location.href = '../Wishlist/index.html';
    // alert('oi')
});

// const btnPspsps = document.querySelector("#pspsps");
// btnPspsps.addEventListener('click', event => {
//     window.location.href = "../ClientArea/index.html";
// });