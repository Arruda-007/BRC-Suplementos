function validateUsuario() {
    var usuario = document.getElementById('usuario').value;
    var errorMessage = document.getElementById('usuario-error');

    if (!/^[a-zA-Z]{6}$/.test(usuario)) {
        errorMessage.textContent = "O Usuário deve ter 6 caracteres alfabéticos.";
        return false;
    } else {
        errorMessage.textContent = "";
        return true;
    }
}

 //USUARIOLETRAS