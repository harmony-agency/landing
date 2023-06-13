<?php

include_once('environment.php');


$servername  = $_ENV["hostname"];
$username    = $_ENV["username"];
$password    = $_ENV["password"];
$dbname      = $_ENV["database"];
$LandingName = $_ENV["hostname"];

try {
    
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password, array(
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
    ));
    // set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected successfully";
    return $pdo;
}
catch (PDOException $e) {
    echo "Connection failed DB";
}