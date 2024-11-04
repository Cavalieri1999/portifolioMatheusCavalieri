<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $nome = htmlspecialchars($_POST['nome']);
    $sobrenome = htmlspecialchars($_POST['sobrenome']);
    $email = htmlspecialchars($_POST['email']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    // Destinatário
    $destinatario = "cavalierimatheus325@gmail.com";
    
    // Assunto do e-mail
    $assunto = "Novo contato de $nome $sobrenome";

    // Mensagem do e-mail
    $corpo = "Nome: $nome\n";
    $corpo .= "Sobrenome: $sobrenome\n";
    $corpo .= "E-mail: $email\n";
    $corpo .= "Telefone: $telefone\n";
    $corpo .= "Mensagem: $mensagem\n";

    // Cabeçalhos do e-mail
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envia o e-mail
    if (mail($destinatario, $assunto, $corpo, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Falha ao enviar a mensagem.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>