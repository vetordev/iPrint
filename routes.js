const btnsLogin = [... document.querySelectorAll(".login")];
btnsLogin.forEach(btnLogin => {
    btnLogin.addEventListener("click", event => {
        window.location.href = "../ClientArea/index.html";
    })
});

const btnAddress = document.querySelector("#btn-address");
btnAddress.addEventListener('click', event => {
    window.location.href = "../ClientAddress/index.html";
});

const btnAccount = document.querySelector("#btn-account-edit");
btnAccount.addEventListener('click', event => {
    window.location.href = '../ClientAccount/index.html';

})

const logo = document.getElementsByClassName("logo");
logo[0].addEventListener('click', event => {
    window.location.href = '../Home/index.html'
})
