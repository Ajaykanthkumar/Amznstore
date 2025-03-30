document.addEventListener('DOMContentLoaded', () => {
  // Skeleton Loader Simulation
  const productImages = document.querySelectorAll('.skeleton');

  setTimeout(() => {
    productImages.forEach(skel => {
      skel.classList.remove('skeleton');
      skel.innerHTML = '<img src="images/sample-product.jpg" alt="Product Image">';
    });
  }, 1500); // Simulate loading delay

  // Toggle Menu
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Search Functionality
  const searchInput = document.querySelector('#searchInput');
  const productCards = document.querySelectorAll('.product-card');

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      const searchText = e.target.value.toLowerCase();
      productCards.forEach(card => {
        const title = card.querySelector('.product-title').textContent.toLowerCase();
        card.style.display = title.includes(searchText) ? 'block' : 'none';
      });
    });
  }

  // Filter by Category or Price
  const filterCategory = document.querySelector('#filterCategory');
  const filterPrice = document.querySelector('#filterPrice');

  function applyFilters() {
    productCards.forEach(card => {
      const category = card.dataset.category.toLowerCase();
      const price = parseFloat(card.dataset.price);
      const selectedCategory = filterCategory?.value.toLowerCase();
      const selectedPrice = parseFloat(filterPrice?.value);

      const showCategory = !selectedCategory || category === selectedCategory;
      const showPrice = !selectedPrice || price <= selectedPrice;

      card.style.display = showCategory && showPrice ? 'block' : 'none';
    });
  }

  if (filterCategory || filterPrice) {
    filterCategory?.addEventListener('change', applyFilters);
    filterPrice?.addEventListener('change', applyFilters);
  }

  // Smooth Scroll (Optional enhancement)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Fake Auth Simulation (for demo purpose)
  const userState = localStorage.getItem('amznstore_user');
  const authBtn = document.querySelector('#authBtn');

  if (authBtn) {
    if (userState) {
      authBtn.textContent = 'Sign Out';
    } else {
      authBtn.textContent = 'Sign In';
    }

    authBtn.addEventListener('click', () => {
      if (userState) {
        localStorage.removeItem('amznstore_user');
        window.location.reload();
      } else {
        window.location.href = 'signin.html';
      }
    });
  }

  // Sample Google Auth (Fake trigger for UI)
  const googleBtn = document.querySelector('#googleSignup');
  if (googleBtn) {
    googleBtn.addEventListener('click', () => {
      alert("Google Sign-In simulated (Integrate real API here)");
      localStorage.setItem('amznstore_user', 'googleUser');
      window.location.href = 'index.html';
    });
  }

  // OTP Verification Simulation
  const otpForm = document.querySelector('#otpForm');
  if (otpForm) {
    otpForm.addEventListener('submit', e => {
      e.preventDefault();
      const mobile = document.querySelector('#mobileInput').value;
      const otp = document.querySelector('#otpInput').value;
      if (otp === '1234') {
        alert("OTP Verified");
        localStorage.setItem('amznstore_user', mobile);
        window.location.href = 'index.html';
      } else {
        alert("Invalid OTP");
      }
    });
  }

  // Structured Data for SEO (dynamic inject)
  const structuredData = document.createElement('script');
  structuredData.type = 'application/ld+json';
  structuredData.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AmznStore",
    "url": "https://www.amznstore.com",
    "logo": "https://www.amznstore.com/logo.png",
    "sameAs": [
      "https://facebook.com/amznstore",
      "https://instagram.com/amznstore"
    ]
  });
  document.head.appendChild(structuredData);
});// JavaScript content will go here
