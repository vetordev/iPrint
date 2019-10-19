window.addEventListener('load', load => {

  $('#btnSair').click(logout);

});

const logout = () => {
  localStorage.clear();
  window.location.href = '../Home';
}