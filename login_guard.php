<?php

session_start();
if(!isset($_SESSION["username"])) {
    return location("login/login.html");
}

?>