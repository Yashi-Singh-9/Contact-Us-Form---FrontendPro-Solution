document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear any previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("subjectError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    let hasError = false;

    // Name validation
    if (name === "") {
      document.getElementById("nameError").innerHTML = "Name is required.";
      hasError = true;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById("emailError").innerHTML = "Email is required.";
      hasError = true;
    } else if (!emailPattern.test(email)) {
      document.getElementById("emailError").innerHTML =
        "Please enter a valid email address.";
      hasError = true;
    }

    // Subject validation
    if (subject === "") {
      document.getElementById("subjectError").innerHTML =
        "Subject is required.";
      hasError = true;
    }

    // Message validation
    if (message === "") {
      document.getElementById("messageError").innerHTML =
        "Message is required.";
      hasError = true;
    }

    // Display success message if no errors
    if (!hasError) {
      document.getElementById("successMessage").innerHTML =
        "Message sent successfully!";
      // Optionally, reset form fields
      document.getElementById("contactForm").reset();
    }
  });
