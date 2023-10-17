<?php
include_once "database.php";
include_once "security.php";

$data = [];

function validate_number($mobile_number){
    if(preg_match('/^[0-9]9[0-9]*$/', $mobile_number)) {
        // the format /^[0-9]{11}+$/ will check for mobile number with 11 digits and only numbers
        return true;
    }   else{
         return false;
        }
}

// subscribers

$phoneNumber = $_POST['phoneNumber'];
$confirm = $_POST['confirm'];
$utm_source = $_POST['utm_source'];
$utm_campaign = $_POST['utm_campaign'];
$utm_medium = $_POST['utm_medium'];
$utm_term = $_POST['utm_term'];
$utm_content = $_POST['utm_content'];
$referrer= $_POST['referrer'];

// Start Security
$statusToken = false;
$headers = getallheaders();
    

if (isset($headers['token'])) {
    
     $statusToken = checkajaxSecurity($headers['token']);
  
}  

// End Security

if(isset($phoneNumber) && $statusToken)  { 
    try {
        $sql = "INSERT INTO subscribers ( phoneNumber ,  utm_source ,  utm_medium , utm_campaign , utm_term , utm_content , referrer)
                  VALUES ('$phoneNumber' , '$utm_source' ,  '$utm_medium' , '$utm_campaign' , '$utm_term' , '$utm_content', '$referrer')";
                  // use exec() because no results are returned
                  $pdo->exec($sql);
                  $data['success'] = true;
                  $data['message'] = "<h2 class='success'>نظر شما با موفقیت ثبت شد</h2>";
    } 
    catch(PDOException $e) {
                  $data['message'] =  $sql . "<br>" . $e->getMessage();
    }

} else {
             $data['success'] = false;
              $data['message'] =  'Access Denied';
 
}






echo json_encode($data);
exit();


