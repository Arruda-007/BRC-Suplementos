function preencherEndereco(cep) {
    var cepInput = cep.replace(/\D/g, '');
    var enderecoError = document.getElementById('endereco-error');

    // Se o campo CEP estiver vazio, limpa os campos de endereço
    if (cepInput === '') {
        limparCamposEndereco();
        return;
    }

    // Faz a requisição para a API de consulta de CEP
    fetch(`https://viacep.com.br/ws/${cepInput}/json/`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar o CEP. Verifique sua conexão de internet.');
            }
            return response.json();
        })
        .then(data => {
            // Verifica se o CEP foi encontrado
            if (data.erro) {
                throw new Error('CEP não encontrado. Preencha manualmente.');
            }

            // Preenche os campos de endereço com os dados recebidos
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('cidade').value = data.localidade;
            document.getElementById('estado').value = data.uf;
            document.getElementById('rua').value = data.logradouro;
            document.getElementById('complemento').focus(); // Move o foco para o campo de complemento
        })
        .catch(error => {
            enderecoError.textContent = error.message;
            limparCamposEndereco(); // Limpa os campos de endereço em caso de erro
        });
}

function limparCamposEndereco() {
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('rua').value = '';
}

 //CEP