function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username && password) {
        window.open("Secured-page.html?username=" + encodeURIComponent(username), "_self");
    } else {
        alert("Please enter both username and password");
    }
}
function register(){
    alert("Succesfully Registered! Please Log In to Continue");
}