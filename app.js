import { auth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from './firebase-config.js';

const navMenu = document.getElementById("nav-menu");
const productList = document.getElementById("product-list");
const provider = new GoogleAuthProvider();

function renderNav(user) {
  navMenu.innerHTML = `
    <a href="index.html">Home</a>
    ${user ? `
      <a href="account.html">Account</a>
      <a href="wishlist.html">Wishlist</a>
      <a href="orders.html">Orders</a>
      <a href="#" id="sign-out">Sign Out</a>
    ` : `
      <a href="signin.html">Sign In</a>
      <a href="signup.html">Sign Up</a>
    `}
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
  `;

  if (user) {
    document.getElementById("sign-out").addEventListener("click", () => {
      signOut(auth);
    });
  }
}

function showAffiliateProduct() {
  const affiliateLink = "https://amzn.to/43zoQyk";
  productList.innerHTML = `
    <iframe src="${affiliateLink}" width="100%" height="600px" frameborder="0"></iframe>
  `;
}

onAuthStateChanged(auth, (user) => {
  renderNav(user);
  showAffiliateProduct();
});


document.addEventListener('DOMContentLoaded', function() {
  const auth = firebase.auth();
  const navMenu = document.getElementById('nav-menu');
  const productList = document.getElementById('product-list');

  // Function to update navigation menu based on authentication status
  const updateNav = (user) => {
    if (user) {
      navMenu.innerHTML = `
        <a href="index.html">Home</a>
        <a href="account.html">Account</a>
        <a href="wishlist.html">Wishlist</a>
        <a href="orders.html">Orders</a>
        <a href="#" id="sign-out">Sign Out</a>
      `;
      document.getElementById('sign-out').addEventListener('click', () => {
        auth.signOut();
      });
    } else {
      navMenu.innerHTML = `
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="signin.html">Sign In</a>
        <a href="signup.html">Sign Up</a>
      `;
    }
  };

  // Monitor auth state changes
  auth.onAuthStateChanged(user => {
    updateNav(user);
    // Fetch and display Amazon products
    displayAmazonProducts();
  });

  // Function to fetch and display Amazon products
  const displayAmazonProducts = () => {
    const affiliateLink = 'https://amzn.to/43zoQyk';
    // Fetch product data from Amazon API or use static links
    // Example of embedding an Amazon product iframe
    productList.innerHTML = `
      <iframe src="${affiliateLink}" width="100%" height="600px" frameborder="0"></iframe>
    `;
  };
});
