<?php

session_start();

if (isset($_SESSION['userLogin'])){
    $user = $_SESSION['userLogin'];

    echo json_encode($user);
    unset($_SESSION['userLogin']);
}




?>