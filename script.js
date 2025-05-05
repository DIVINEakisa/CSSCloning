document.getElementById('signInForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
  
    // Dummy validation
    if (email === "user@example.com" && password === "password123") {
      message.style.color = "green";
      message.textContent = "Sign-in successful!";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid email or password.";
    }
  });
  