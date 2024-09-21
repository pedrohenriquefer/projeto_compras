// Cadastro e login
document.getElementById('login-link').addEventListener('click', function () {
    const username = prompt('Digite seu nome de usuário:');
    if (username) {
        localStorage.setItem('username', username);
        alert('Login realizado com sucesso!');
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('logout-link').style.display = 'inline';
    }
});

document.getElementById('logout-link').addEventListener('click', function () {
    localStorage.removeItem('username');
    alert('Logout realizado com sucesso!');
    document.getElementById('login-link').style.display = 'inline';
    document.getElementById('logout-link').style.display = 'none';
});

// Verificar se o usuário está logado
document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('username')) {
        document.getElementById('login-link').style.display = 'none';
        document.getElementById('logout-link').style.display = 'inline';
    }
});
