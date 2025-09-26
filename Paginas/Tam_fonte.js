function aumentarFonte() {
    // Obtem o tamanho atual da fonte
    var tamanhoAtual = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
    // Aumenta o tamanho da fonte em 2 pixels
    document.body.style.fontSize = (tamanhoAtual + 2) + 'px';
}

function diminuirFonte() {
    // Obtem o tamanho atual da fonte
    var tamanhoAtual = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'));
    // Diminui o tamanho da fonte em 2 pixels
    document.body.style.fontSize = (tamanhoAtual - 2) + 'px';
}