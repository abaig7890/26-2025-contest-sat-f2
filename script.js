document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const emailSuccess = document.getElementById('emailSuccess');
    const passwordError = document.getElementById('passwordError');
    const passwordSuccess = document.getElementById('passwordSuccess');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('signupForm');

    let isEmailValid = false;
    let isPasswordValid = false;

    // Email validation
    emailInput.addEventListener('input', function() {
        const email = emailInput.value.trim();
        emailError.textContent = '';
        emailSuccess.textContent = '';

        if (email.length <= 3) {
            emailError.textContent = 'Email must be more than 3 characters';
            isEmailValid = false;
        } else if (!email.includes('@') || !email.includes('.')) {
            emailError.textContent = 'Email must contain "@" and "."';
            isEmailValid = false;
        } else {
            emailSuccess.textContent = 'All good to go!';
            isEmailValid = true;
        }

        updateSubmitButton();
    });

    // Password validation
    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value.trim();
        passwordError.textContent = '';
        passwordSuccess.textContent = '';

        if (password.length <= 8) {
            passwordError.textContent = 'Password must be more than 8 characters';
            isPasswordValid = false;
        } else {
            passwordSuccess.textContent = 'All good to go!';
            isPasswordValid = true;
        }

        updateSubmitButton();
    });

    // Update submit button state
    function updateSubmitButton() {
        submitBtn.disabled = !(isEmailValid && isPasswordValid);
    }

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (confirm('Are you sure you want to submit?')) {
            alert('Successful signup!');
            // Here you would typically submit the form data to a server
            form.reset();
            emailSuccess.textContent = '';
            passwordSuccess.textContent = '';
            isEmailValid = false;
            isPasswordValid = false;
            updateSubmitButton();
        } else {
            // Clear form and reset validation
            form.reset();
            emailError.textContent = '';
            emailSuccess.textContent = '';
            passwordError.textContent = '';
            passwordSuccess.textContent = '';
            isEmailValid = false;
            isPasswordValid = false;
            updateSubmitButton();
            
            // Redirect to same page (reload)
            window.location.reload();
        }
    });
});