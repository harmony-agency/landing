<?php

include "config.php";

$data = [];

$name = $_POST['name'];
$phone = $_POST['phone'];
$product = trim($_POST['product']);
$service = trim($_POST['service']);

$utm_source = $_POST['utm_source'];
$utm_campaign = $_POST['utm_campaign'];
$utm_medium = $_POST['utm_medium'];

$referrer= $_POST['referrer'];

if(isset($phone))  { 
            if($phone!='')
            {
                if(!is_numeric($phone) || (is_numeric($phone) && strlen($phone)!=11) || (is_numeric($phone) && strlen($phone)==11 && strpos($phone, "09"))) 
                {
                    $data['message'] = 'لطفا شماره تماس معتبر وارد کنید.';
                    $data['success'] = false;
                }else{
                    $data['success'] = true;
         
                    try {
                        
                                $sql = "INSERT INTO subscribers (name, phone , city , utm_source ,  utm_medium , utm_campaign , referrer)
                                VALUES ('$name', $phone ,  '$city'  , '$utm_source' ,  '$utm_medium' , '$utm_campaign' , '$referrer')";
                                // use exec() because no results are returned
                                $pdo->exec($sql);
                                $data['message'] = "با تشکر،اطلاعات شما با موفقیت ثبت شد";
                        } 
                 catch(PDOException $e) {
                                $data['message'] =  $sql . "<br>" . $e->getMessage();
                    }
                }
            }else{
                    $data['message'] = 'لطفا شماره تماس را وارد کنید.';
                    $data['success'] = false;
            }
        }


echo json_encode($data);


