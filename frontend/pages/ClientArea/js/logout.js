window.addEventListener('load', load => {

  $('.logout').click(logout);

});

const logout = () => {
  localStorage.clear();
  window.location.href = '../Home';
}