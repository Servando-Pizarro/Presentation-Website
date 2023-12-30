document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add form validation logic
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Logic to handle form submission
        console.log('Form submitted');
    } else {
        // Logic to handle validation error
        console.log('Validation failed');
    }
});


