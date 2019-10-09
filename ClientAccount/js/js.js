function photoShow() {
    var filter = document.getElementsByClassName("photo-filter")[0];
    filter.style.visibility = "visible";
}
function photoHidden() {
    var filter = document.getElementsByClassName("photo-filter")[0];
    filter.style.visibility = "hidden";
}
function photoClick() {
    var avatares = document.getElementById("avatares");
    avatares.style.display = "block";

}
function photoChoice(avatar) {
    var avatares = document.getElementById("avatares");
    var photo = document.getElementsByClassName("photo-profile")[0];
    avatares.style.display = "none";
    photo.style.backgroundImage = avatar;
}

window.onload = function verificaP() {
    var person = this.localStorage.getItem('type');
    var physical = document.getElementById('physical');
    var legal = document.getElementById('legal');
    if (person == 'legal') {
        legal.style.display = 'flex';
        physical.style.display = 'none';
    }else{
        legal.style.display = 'none';
        physical.style.display = 'flex';
    }
}