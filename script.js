// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Google Sign-In
document.getElementById('sign-in').addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      console.log(`Hello, ${result.user.displayName}`);
      document.getElementById('sign-in').style.display = 'none';
      document.getElementById('sign-out').style.display = 'block';
    })
    .catch((error) => {
      console.error(error);
    });
});

// Sign Out
document.getElementById('sign-out').addEventListener('click', () => {
  auth.signOut().then(() => {
    document.getElementById('sign-in').style.display = 'block';
    document.getElementById('sign-out').style.display = 'none';
  });
});

// Phone Number Sign-In
function signInWithPhoneNumber() {
  const phoneNumber = prompt("Enter your phone number:");
  const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  auth.signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      const code = prompt("Enter the verification code sent to your phone:");
      return confirmationResult.confirm(code);
    })
    .then((result) => {
      console.log(`Hello, ${result.user.phoneNumber}`);
    })
    .catch((error) => {
      console.error(error);
    });
}
