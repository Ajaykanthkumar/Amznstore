// Firebase Auth Observer to track user login state
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("User is signed in:", user.displayName || user.phoneNumber);
    localStorage.setItem("loggedIn", "true");
  } else {
    console.log("No user is signed in.");
    localStorage.setItem("loggedIn", "false");
  }
  updateAuthMenu(); // Update menu based on state
});

function signOut() {
  firebase.auth().signOut().then(() => {
    alert("Signed out!");
    localStorage.setItem("loggedIn", "false");
    updateAuthMenu();
    window.location.href = "index.html"; // Optional: Redirect to home
  }).catch(error => {
    console.error("Sign-out error:", error);
    alert("Failed to sign out");
  });
}

function updateAuthMenu() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  document.querySelectorAll('.auth').forEach(el => el.style.display = isLoggedIn ? 'inline' : 'none');
  document.querySelectorAll('.unauth').forEach(el => el.style.display = !isLoggedIn ? 'inline' : 'none');
}

window.onload = updateAuthMenu;
