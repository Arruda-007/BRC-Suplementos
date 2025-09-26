function validateSenha() {
    var senha = document.getElementById('senha').value;
    var errorMessage = document.getElementById('senha-error');

    if (!/^[a-zA-Z]{8}$/.test(senha)) {
        errorMessage.textContent = "A senha deve ter 8 caracteres alfabéticos.";
        return false;
    } else {
        errorMessage.textContent = "";
        return true;
    }
}

function validateConfirmacaoSenha() {
    var senha = document.getElementById('senha').value;
    var confirmacaoSenha = document.getElementById('confirmesuasenha').value;
    var errorMessage = document.getElementById('confirmesuasenha-error');

    if (senha !== confirmacaoSenha) {
        errorMessage.textContent = "As senhas não coincidem.";
        return false;
    } else {
        errorMessage.textContent = "";
        return true;
    }
}

function validateForm() {
    var isSenhaValida = validateSenha();
    var isConfirmacaoSenhaValida = validateConfirmacaoSenha();
    return isSenhaValida && isConfirmacaoSenhaValida;
}

 //SENHAeCONFIRMARSENHA