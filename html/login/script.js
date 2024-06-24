function redirecionar(event) {
    event.preventDefault();  // Previne o envio padrão do formulário

    // Adicione a lógica de validação ou manipulação dos dados do formulário aqui, se necessário

    // Redireciona para a próxima página
    window.location.href = '/html/home/index.html';

    return false;  // Previne o envio do formulário
}