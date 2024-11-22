
    // Validate email using regular expression
    function validateEmail(email) {
        var reqformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return reqformat.test(String(email).toLowerCase());
    }

    // Main form validation function
    function validateForm(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("textbox").value;

        // Name validation (length between 2 and 20 characters)
        if (name.length < 2 || name.length > 20) {
            alert("Write your name with 2 to 20 characters.");
            return false;
        }

        // Email validation
        if (!validateEmail(email)) {
            alert("Invalid email address!");
            return false;
        }

        // Message validation (make sure the textarea isn't empty)
        if (message.length < 2 || message.length >70) {
            alert("Please adjust yous message in 70 characters");
            return false;
        }

        // Store the data in localStorage and redirect to the confirmation page
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);

        // Redirect to confirmation page
        window.location.href = "confmsg.html";  // Correct redirection
    }
     // Get the data from localStorage
     document.getElementById('nameDisplay').textContent = localStorage.getItem('name');
     document.getElementById('emailDisplay').textContent = localStorage.getItem('email');
     document.getElementById('messageDisplay').textContent = localStorage.getItem('message');

     // Optionally, clear the data after displaying it
     localStorage.clear();
