<?php
include_once('environment.php');

session_start();

if(isset($_GET['token'])){
    $token = bin2hex(random_bytes(32));
    $_SESSION['token'] = $token;
    ajaxSecurity($token);
}
// Function to check string starting
// with given substring
function startsWith ($string, $startString)
{
    $len = strlen($startString);
    return (substr($string, 0, $len) === $startString);
}

function ajaxSecurity($csrf)
{
    $check = [];

    if ($_SERVER["HTTP_X_REQUESTED_WITH"] == "XMLHttpRequest") {
        //Request identified as ajax request
        $check_baseurl  = startsWith($_SERVER["HTTP_REFERER"],$_ENV["url"]);

        if (
            isset($_SERVER["HTTP_REFERER"]) &&
            $check_baseurl
          ) {
            //HTTP_REFERER verification
            if ($csrf == $_SESSION["token"]) {

                $check["status"] = true;
                 $check["token"] = $csrf;
                $check["message"] = "Token Is Valid";
            } else {
                $check["status"] = false;
                $check["message"] = "Token Not Valid";
            }
        } else {
            $check["status"] = false;
            $check["message"] = "Acess Denied";
        }
    } else {
         $check["status"] = false;
         $check["message"] = "Ajax Request Not Valid";
    }

    echo json_encode($check);
}
function checkajaxSecurity($csrf)
{

    if ($_SERVER["HTTP_X_REQUESTED_WITH"] == "XMLHttpRequest") {
        //Request identified as ajax request

        $check_baseurl  = startsWith($_SERVER["HTTP_REFERER"],$_ENV["url"]);

        if (
            isset($_SERVER["HTTP_REFERER"]) &&
            $check_baseurl 
        ) {
            //HTTP_REFERER verification
            if ($csrf == $_SESSION["token"]) {

                    return true;
            } else {
               return false;
            }
        } else {
                        return false;
        }
    } else {
                  return false;

    }

}