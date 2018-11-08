/**
 * If log out button is clicked send Panel to destroy session and redirect to index.html
 */
function logout() {
    Logout(null);
    localStorage.clear();
    window.location.replace("index.html");
}

function Logout(logoutCallback) {
    $.post(
        ParseUrl("LogOut.php"),
        {},
        logoutCallback
    );

}

