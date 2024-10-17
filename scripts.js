// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    
    // Form validation and submission
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission for now

        // Validation
        let isValid = true;

        // Name Validation
        if (nameInput.value.trim() === '') {
            displayError(nameInput, 'Name is required');
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Email Validation (Simple Regex for format)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            displayError(emailInput, 'Please enter a valid email');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Message Validation
        if (messageInput.value.trim() === '') {
            displayError(messageInput, 'Message is required');
            isValid = false;
        } else {
            clearError(messageInput);
        }

        // If form is valid, simulate form submission
        if (isValid) {
            form.reset(); // Clear form
            showFormSuccess(); // Show success message
        }
    });

    // Function to display error message
    function displayError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
        input.classList.add('error');
    }

    // Function to clear error message
    function clearError(input) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = '';
        input.classList.remove('error');
    }

    // Function to show a success message after submission
    function showFormSuccess() {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.textContent = 'Thank you! Your message has been sent.';
        form.parentNode.insertBefore(successMessage, form.nextSibling);

        // Automatically hide after 3 seconds
        setTimeout(function () {
            successMessage.remove();
        }, 3000);
    }

    // DOM manipulation - Highlight product cards on hover
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            card.style.transform = 'scale(1.05)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = 'none';
        });

        // Add click event for product card
        card.addEventListener('click', function () {
            alert(`You clicked on ${card.querySelector('h3').textContent}`);
        });
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = e.target.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });

        // Hover effect for navbar links
        link.addEventListener('mouseenter', function () {
            link.style.backgroundColor = '#333';
        });

        link.addEventListener('mouseleave', function () {
            link.style.backgroundColor = '';
        });
    });

    // Sticky Navbar on Scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // Focus/Blur Events for Form Inputs
    const formFields = document.querySelectorAll('input, textarea');

    formFields.forEach(function (field) {
        field.addEventListener('focus', function () {
            field.style.borderColor = '#4caf50';
        });

        field.addEventListener('blur', function () {
            field.style.borderColor = '';
        });
    });
});
