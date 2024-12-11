<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coletando os dados do formulário
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Email de destino
    $to = "pixel.webdesign.company@gmail.com";
    
    // Assunto do email
    $email_subject = "Nova mensagem de: $name";
    
    // Corpo do email
    $email_body = "Você recebeu uma nova mensagem do formulário de contato:\n\n".
                  "Nome: $name\n".
                  "Email: $email\n".
                  "Assunto: $subject\n".
                  "Mensagem:\n$message";

    // Cabeçalhos
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Enviando o email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Sua mensagem foi enviada com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar sua mensagem. Tente novamente.";
    }
}
?>
