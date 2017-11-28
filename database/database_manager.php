<?php

class DatabaseManager {
    public $connected = false;
    public $connection_error = null;

    function __construct() {
        $this->connected = false;
    }

    function __destruct() {
        if($this->connected) {
            // Implement disconnection
        }
    }

    public function connect($host, $username, $password, $dbname) {
        if($this->connected) {
            return;
        }
        // Implement connection
        $this->connected = true; // After connection was successful
    }

    public function disconnect() {
        // Manual disconnection
    }

    public function query($statement) {
        // Execute query and return result in some nice form, e.g. associative array
        return [];
    }
}

?>