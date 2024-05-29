document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Aqui você pode adicionar uma verificação de autenticação, se necessário

    // Redireciona para a página index.html na pasta templates após o login
    window.location.href = '/templates/index.html';
});


