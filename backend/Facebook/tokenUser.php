<?php


ob_start();
 
require __DIR__."/vendor/autoload.php";

// Criando o provider
$facebook = new \League\OAuth2\Client\Provider\Facebook([
    'clientId' => FACEBOOK["app_id"],
    'clientSecret' => FACEBOOK['app_secret'],
    'redirectUri' => FACEBOOK['app_redirect'],
    'graphApiVersion' => FACEBOOK['app_version'],
]);

// buscando a variavel code na url
$code = filter_input(INPUT_GET, "code", FILTER_SANITIZE_STRIPPED);
if (!isset($code)){
    // criando url de autenticação 
    $authUrl = $facebook->getAuthorizationUrl([
        "scope" => ['email']
    ]);
    // redirecionando para a tela de autenticação
    echo $authUrl;
    
} 

if(isset($code)){
    // pegando acesso do token com base no code devolvido pela url
    $token = $facebook->getAccessToken('authorization_code', [
        "code" => $code
    ]);
    $_SESSION['userLogin'] = ['email' => ''];
    $user = $facebook->getResourceOwner($token);
    $_SESSION['userLogin']['email'] = $user->getEmail();
    header('location: ../login.html');
}

ob_end_flush();

?>