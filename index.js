document.addEventListener("DOMContentLoaded", function() {            // Wait for the DOM content to load
    const registrationForm = document.getElementById("registration");  // Get the registration form
    const loginForm = document.getElementById("login");               // Get the login form
    const errorDisplay = document.getElementById("errorDisplay");    // Get the error display container
    registrationForm.addEventListener("submit", function(event) {     // Add event listener for registration form submission

      event.preventDefault();              // Prevent form submission

      const isValid = validateRegistrationForm();       // Validate registration form

      if (isValid) {                      // If form is valid, proceed with submission

        storeUserData(getFormData(registrationForm));         // Store user data in localStorage

        clearFormFields(registrationForm);           // Clear form fields

        
        showError("Registration successful!", false);  // Show success message
      }
    });
  
    loginForm.addEventListener("submit", function(event) { // Event listener for login form submission
      event.preventDefault();       // Prevent form submission

      const isValid = validateLoginForm();       // Validate login form

      if (isValid) {     // If form is valid, proceed with submission
     
        clearFormFields(loginForm); // Clear form fields
       
        showError("Login successful!", loginForm.persist.checked);  // Success message
      }
    });
  
    function validateRegistrationForm() {      // Function to validate the registration form

      const formData = getFormData(registrationForm); // Get form data 
      
    }
  
    function validateLoginForm() { // Function to validate the login form
     
      const formData = getFormData(loginForm);  // Get form data
    
    }
  
    function storeUserData(userData) { // Store user data in localStorage
      
    }
  
    function getFormData(form) {  // Get form data as an object
      
      const formData = {}; // Create an object to store form data
      for (const element of form.elements) { // Loop through form elements
        if (element.type !== "submit") { // Exclude submit button
          formData[element.name] = element.value;   // Add element value to formData object
        }
      }
      return formData;
    }
  

    function clearFormFields(form) { // Clear form fields

      form.reset();   // Reset the form
    }
  
    function showError(message, persist) {    // Display error message
      errorDisplay.textContent = message;  // Display error message in errorDisplay container
      errorDisplay.style.display = "block"; // Show the errorDisplay container
      if (!persist) { // Hide errorDisplay container after 3 seconds if not persistent
        setTimeout(() => {
          errorDisplay.style.display = "none";
        }, 3000);
      }
    }
  });
  