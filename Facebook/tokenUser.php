<?php

ob_start();
 
require __DIR__."/vendor/autoload.php";

if (empty($_SESSION['userLogin'])){
    echo "<h1>Guest</h1>";
    $facebook = new \League\OAuth2\Client\Provider\Facebook([
        'clientId' => FACEBOOK["app_id"],
        'clientSecret' => FACEBOOK['app_secret'],
        'redirectUri' => FACEBOOK['app_redirect'],
        'graphApiVersion' => FACEBOOK['app_version'],
    ]);
    
    $authUrl = $facebook->getAuthorizationUrl([
        "scope" => ['email']
    ]);
    
    // Se ele cancelar o login no facebook
    // $error = filter_input(INPUT_GET, "error", FILTER_SANITIZE_STRIPPED);

    // if($error){
    //     echo "<h4>Você precisar autorizar para continuar</h4>";
    // }
    //Se ele aceitar o login retornará um codigo
    
    $code = filter_input(INPUT_GET, "code", FILTER_SANITIZE_STRIPPED);
    if($code){
        $token = $facebook->getAccessToken('authorization_code', [
            "code" => $code
        ]);

        $_SESSION['userLogin'] = $facebook->getResourceOwner($token);
        header("Refresh: 0");

    }

    echo "<a title='FB Login' href={$authUrl}>Facebook Login</a>";
// define('urlFacebook', $authUrl);

// echo "<a title='FB Login' href=".urlFacebook.">Facebook Login</a>";

}

ob_end_flush();


?>