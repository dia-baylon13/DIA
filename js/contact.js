document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        const name = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const message = contactForm.elements['message'].value;

        // Send email using SmtpJS
        Email.send({
            SecureToken: "YOUR_SECURE_TOKEN", // Replace with your secure token
            To: 'recipient@example.com', // Replace with the recipient's email address
            From: email,
            Subject: `New message from ${name}`,
            Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
        }).then(
            message => alert('Email Sent Successfully')
        ).catch(
            error => alert('Failed to send email: ' + error)
        );

        // Optionally, reset the form after submission
        contactForm.reset();
    });
}); 