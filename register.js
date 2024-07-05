// register.js
document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const formMessage = document.getElementById('formMessage');

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        if (response.ok) {
            formMessage.textContent = 'User registered successfully.';
            formMessage.className = 'message success';
            formMessage.style.display = 'block';
            setTimeout(() => {
                window.location.href = '/'; // Redirect to homepage after registration
            }, 2000);
        } else {
            formMessage.textContent = 'Registration failed. Please try again.';
            formMessage.className = 'message error';
            formMessage.style.display = 'block';
        }
    });
});

