function signOut() {
  alert("Signed out!");
  localStorage.removeItem("loggedIn");
  updateAuthMenu();
}

function updateAuthMenu() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  document.querySelectorAll('.auth').forEach(el => el.style.display = isLoggedIn ? 'inline' : 'none');
  document.querySelectorAll('.unauth').forEach(el => el.style.display = !isLoggedIn ? 'inline' : 'none');
}

window.onload = updateAuthMenu;