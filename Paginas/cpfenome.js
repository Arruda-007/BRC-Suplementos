function validateNomeCompleto() {
    var nomeCompleto = document.getElementById('nomecompleto').value;
    var regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{15,80}$/;
    var errorMessage = document.getElementById('nomecompleto-error');
    if (!regex.test(nomeCompleto)) {
        errorMessage.textContent = "O nome completo deve ter entre 15 e 80 caracteres alfabéticos.";
        return false;
    } else {
        errorMessage.textContent = "";
        return true;
    }
}

function validateCPF() {
    var cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    var errorMessage = document.getElementById('cpf-error');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        errorMessage.textContent = "CPF inválido.";
        return false;
    }

    function calculateDigit(cpf, factor) {
        var total = 0;
        for (var i = 0; i < factor - 1; i++) {
            total += parseInt(cpf.charAt(i)) * (factor - i);
        }
        var remainder = total % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    }

    var firstDigit = calculateDigit(cpf, 10);
    var secondDigit = calculateDigit(cpf, 11);

    if (firstDigit !== parseInt(cpf.charAt(9)) || secondDigit !== parseInt(cpf.charAt(10))) {
        errorMessage.textContent = "CPF inválido.";
        return false;
    }

    errorMessage.textContent = "";
    return true;
}

function validateForm() {
    var isNomeCompletoValid = validateNomeCompleto();
    var isCPFValid = validateCPF();
    return isNomeCompletoValid && isCPFValid;
}

 //NOMEeCPF