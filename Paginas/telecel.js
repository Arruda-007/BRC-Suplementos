function formatarTelefone(input) {
    // Remove todos os caracteres que não são números do valor do input
    var numero = input.value.replace(/\D/g, '');

    // Adiciona o formato desejado (+55)XX-XXXXXXXX
    var formato = '($1)$2-$3';
    if (numero.length <= 10) {
        // Formatação para telefone fixo
        input.value = numero.replace(/(\d{2})(\d{4})(\d{4})/, formato);
    } else {
        // Formatação para telefone celular
        input.value = numero.replace(/(\d{2})(\d{5})(\d{4})/, formato);
    }
}

 //TELeCEL