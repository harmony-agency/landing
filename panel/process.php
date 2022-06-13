<?php

include "config.php";

$data = [];

function validate_number($mobile_number){
    if(preg_match('/^[0-9]9[0-9]*$/', $mobile_number)) {
        // the format /^[0-9]{11}+$/ will check for mobile number with 11 digits and only numbers
        return true;
    }   else{
         return false;
        }
    }

$name = $_POST['name'];
$phone = $_POST['phone'];
$utm_source = $_POST['utm_source'];
$utm_campaign = $_POST['utm_campaign'];
$utm_medium = $_POST['utm_medium'];
$utm_term = $_POST['utm_term'];
$utm_content = $_POST['utm_content'];

$referrer= $_POST['referrer'];

if(isset($phone))  { 
            if($phone!='')
            {
                if(validate_number($phone) == false) 
                {
                    $data['message'] = 'لطفا شماره تماس معتبر وارد کنید.';
                    $data['success'] = false;
                }else{
                    // $data['success'] = true;
         
                    try {
                        
                                $sql = "INSERT INTO subscribers (name, phone , utm_source ,  utm_medium , utm_campaign , utm_term , utm_content , referrer)
                                VALUES ('$name', $phone , '$utm_source' ,  '$utm_medium' , '$utm_campaign' , '$utm_term' , '$utm_content', '$referrer')";
                                // use exec() because no results are returned
                                $pdo->exec($sql);
                                $data['message'] = "<h2 class='success'>درخواست شما با موفقیت ثبت شد</h2>";
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
exit();


