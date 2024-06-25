document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Redireciona para a página index.html na pasta templates após o login
    window.location.href = '/templates/index.html';
});


