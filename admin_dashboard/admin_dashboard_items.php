<?php

    include "../database/database_config.php";
    include "../database/database_manager.php";

    $method = ''; // Get method type from request

    $db = new DatabaseManager();
    $db->connect($database_connection_config["HOST"], $database_connection_config["USERNAME"], $database_connection_config["PASSWORD"], $database_connection_config["DATABASE_NAME"]);
    if($db->connection_error) {
        // Send error and kill
    }

    if($method == "GET") {
        $query = "";
        // Prepare query
        $query_result = $db->query($query);
        if(!$query_result) {
            // Send error and kill
        }

        echo json_encode($query_result);
    } else if($method == 'POST') {
        // Handle add
    } else if($method == "DELETE") {
        // Handle remove
    }

?>