document.addEventListener('DOMContentLoaded', function() {
    const userStatus = document.getElementById('user-status');
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        userStatus.innerHTML = `<p>${loggedInUser}!</p><button id="logoutButton">Logout</button>`;
        document.getElementById('logoutButton').addEventListener('click', function() {
            localStorage.removeItem('loggedInUser');
            window.location.reload();
        });
    } else {
        userStatus.innerHTML = `<p>Você não está logado.</p>`;
    }
});

 //USUARIOLOGADO