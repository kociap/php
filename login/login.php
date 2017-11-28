<?php

include "../database/database_config.php";
include "../database/database_manager.php";

// Get both from ajax
$username = '';
$password = '';

$db = new DatabaseManager();
$db->connect($database_connection_config["HOST"], $database_connection_config["USERNAME"], $database_connection_config["PASSWORD"], $database_connection_config["DATABASE_NAME"]);
if($db->connection__error) {
    // Send error and kill
}

$query_result = $db->query(/* Get password to compare */);
if(!$query_result) {
    // Send error and kill
}
    
    
if($query_result["password"] != $password) {
    // Send error and kill
}

session_start();
$_SESSION['username'] = $username;
$_SESSION["logged"] = true;
$_SESSION["permission"] = $query_result["permission"];

?>