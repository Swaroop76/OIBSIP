function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Add your authentication logic here
    // For a basic example, let's just check if both fields are non-empty
    if (username && password) {
        alert("Login successful!");
        // You can redirect the user to another page or perform other actions here
    } else {
        alert("Please enter both username and password");
    }
}