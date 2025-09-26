document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('usuario').value;
    const password = document.getElementById('senha').value;
    const confirmPassword = document.getElementById('confirmesuasenha').value;

    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    window.location.href = 'login.html';
});

//CONFRIMAFORMeLOGIN