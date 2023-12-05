// Get the username from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// Display the username on the page
if (username) {
    document.getElementById("usernameDisplay").innerText = "Welcome, " + username + "!";
} else {
    // Handle the case where the username is not provided
    console.error("Username not found in the URL parameters");
}
