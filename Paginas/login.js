document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const loginUsername = document.getElementById('usuario').value;
    const loginPassword = document.getElementById('senha').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert('Login bem-sucedido!');
        localStorage.setItem('loggedInUser', loginUsername);  // Salva o nome do usuário logado
        window.location.href = 'Tela_inicial.html';  // Redireciona para a tela inicial
    } else {
        document.getElementById('login-error').innerText = 'Usuário ou senha incorretos.';
    }
});

 //LOGIN