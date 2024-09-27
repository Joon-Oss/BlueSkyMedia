// Switch between login and signup forms
document.getElementById('showSignup').addEventListener('click', function () {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', function () {
    document.getElementById('signup-form').classList.remove('active');
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.add('active');
    document.getElementById('login-form').classList.remove('hidden');
});

// Basic form validation for login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple email and password validation (mock)
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
  
    // Mock login credentials (this can be changed later with real authentication)
    if (email === 'user@example.com' && password === 'password123') {
      alert('Login successful!');
      // Redirect to the dashboard page
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid credentials. Please try again.');
    }
});

// Basic form validation for signup
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (!username || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
  
    // Mock signup process (this can be extended for real sign-up flow)
    alert('Signup successful!');
});
