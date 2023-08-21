<?php

header('Access-Control-Allow-Origin: *');

include "../database.php";


$data_id = $_POST['data_id'];

if($data_id){
    $sql_select_item = "SELECT *  FROM products LEFT JOIN value_table ON products.product_id = value_table.product_id WHERE value_table.product_id = '$data_id'" ;
    $records = $pdo->query($sql_select_item)->fetchAll();

    
    echo json_encode( $records,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE);

} else {
    echo 'Access Denied';
}