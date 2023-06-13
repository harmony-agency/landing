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

$fullName = $_POST['fullName'];
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
        $sql = "INSERT INTO subscribers (fullName, phoneNumber ,  utm_source ,  utm_medium , utm_campaign , utm_term , utm_content , referrer)
                  VALUES ('$fullName', '$phoneNumber' , '$utm_source' ,  '$utm_medium' , '$utm_campaign' , '$utm_term' , '$utm_content', '$referrer')";
                  // use exec() because no results are returned
                  $pdo->exec($sql);
                  sendMail($fullName , $phoneNumber);
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

function sendMail($fullName , $phoneNumber ) {
    $to = "test@gmail.com";
    $subject = "new subscribe";
    $message = "
    <html>
    <head>
    <title>HTML email</title>
    </head>
    <body>
    <table>
    <tr>
    <th>نام و نام خانوادگی</th>
    <th>شماره تماس</th>
    </tr>
    <tr>
    <td> $fullName  </td>
    <td> $phoneNumber </td>
    </tr>
    </table>
    </body>
    </html>
    ";
    
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // More headers
    $headers .= 'From: <info@example.com>' . "\r\n";
    
    mail($to,$subject,$message,$headers); 
}




echo json_encode($data);
exit();


