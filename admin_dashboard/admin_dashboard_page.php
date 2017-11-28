<?php

include "permission.php";
include "login_guard.php";

if($_SESSION["permission"] != $permission["ADMIN"]) {
    location("../main/main_page.php");
}

?>

<!DOCTYPE html>
<html>
    <head>
        <meta name='viewport' content='initial-scale=1, width=device-width'>
        <meta charset="utf-8">
        <title>Admin Dashboard</title>

        <link rel="stylesheet" href='admin_dashboard.css'>
    </head>
    <body>
        <!-- 
            Add pagination to both elements or whatever
        -->
        <div>
            <h3>Orders</h3>
            <div id='orders-list'></div>
        </div>
        <div>
            <h3>Items</h3>
            <div id='items-list'></div>
        </div>

        <script src='../http_status.js'></script>
        <script src='../urls.js'></script>
        <script src='../ajax.js'></script>
        <script src='admin_dashboard.js'></script>
    </body>
</html>