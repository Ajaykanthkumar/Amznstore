document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const signupForm = document.querySelector('#signupForm');
  const signinForm = document.querySelector('#signinForm');
  const otpForm = document.querySelector('#otpForm');
  const googleSignupBtn = document.querySelector('#googleSignupBtn');
  const googleSigninBtn = document.querySelector('#googleSigninBtn');

  // Helper: Redirect
  const redirectToHome = () => {
    window.location.href = 'index.html';
  };

  // Helper: Save user
  const loginUser = (user) => {
    localStorage.setItem('amznstore_user', JSON.stringify(user));
    redirectToHome();
  };

  // Handle Sign Up Form
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const mobile = document.querySelector('#signupMobile').value.trim();
      const password = document.querySelector('#signupPassword').value;

      if (!/^[6-9]\d{9}$/.test(mobile)) {
        alert("Enter a valid 10-digit Indian mobile number.");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
      }

      // Simulate OTP send
      alert(`OTP sent to ${mobile}. Use '1234' as test OTP.`);

      localStorage.setItem('pending_signup', JSON.stringify({ mobile, password }));
      window.location.href = 'otp.html';
    });
  }

  // Handle OTP Form
  if (otpForm) {
    otpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const otp = document.querySelector('#otpInput').value;
      const storedData = JSON.parse(localStorage.getItem('pending_signup'));

      if (!storedData) {
        alert("No signup in progress. Please try again.");
        return;
      }

      if (otp === '1234') {
        loginUser({ mobile: storedData.mobile });
        localStorage.removeItem('pending_signup');
      } else {
        alert("Invalid OTP.");
      }
    });
  }

  // Handle Sign In Form
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const mobile = document.querySelector('#signinMobile').value.trim();
      const password = document.querySelector('#signinPassword').value;

      // In a real project, you'd verify with a backend
      const storedUser = JSON.parse(localStorage.getItem('amznstore_user'));

      if (storedUser && storedUser.mobile === mobile) {
        loginUser(storedUser);
      } else {
        alert("User not found or invalid credentials (simulate).");
      }
    });
  }

  // Handle Google Sign-In Simulated
  const handleGoogleSignIn = () => {
    const dummyUser = {
      name: "Google User",
      email: "user@gmail.com",
      method: "google"
    };
    loginUser(dummyUser);
  };

  if (googleSignupBtn) googleSignupBtn.addEventListener('click', handleGoogleSignIn);
  if (googleSigninBtn) googleSigninBtn.addEventListener('click', handleGoogleSignIn);
});// Authentication logic (Sign up, Sign in) will go here
