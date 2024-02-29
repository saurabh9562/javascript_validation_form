const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirm_password = document.getElementById('confirm password').value.trim();
    const mobile = document.getElementById('mobile').value.trim();


    if (name === '') {
        alert('Name must be filled out');
        return false;
    }

    if (email === '') {
        alert('Email must be filled out');
        return false;
    } else if (!validateEmail(email)) {
        alert('Invalid email format');
        return false;
    }

    if (password === '') {
        alert('Password must be filled out');
        return false;
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return false;
    }

    if(password !== confirm_password){
        alert('password does not match');
        return false;
    }

    var mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobile)) {
    alert('Please enter a valid 10-digit mobile number');
    return false;

    return true;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
}