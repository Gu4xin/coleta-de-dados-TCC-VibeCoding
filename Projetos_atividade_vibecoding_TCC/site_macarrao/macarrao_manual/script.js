// Separação correta de conceitos - Lógica isolada do HTML
document.addEventListener('DOMContentLoaded', function() {
    
    const botaoPedir = document.getElementById('btn-pedir');
    const inputMassa = document.getElementById('input-massa');
    const mensagemRetorno = document.getElementById('mensagem-retorno');

    botaoPedir.addEventListener('click', function() {
        const tipoMassa = inputMassa.value.trim();
        
        if (tipoMassa !== "") {
            mensagemRetorno.style.color = "green";
            mensagemRetorno.textContent = "Sucesso! O seu pedido de '" + tipoMassa + "' está sendo preparado.";
            inputMassa.value = ""; // limpa o campo
        } else {
            mensagemRetorno.style.color = "red";
            mensagemRetorno.textContent = "Erro: Por favor, digite o nome de uma massa antes de confirmar.";
        }
    });

});
