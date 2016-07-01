<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Contact</title>

</head>

<body>

<?php
 
if(isset($_POST['emailid'])) {
 
     
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
 
    $email_to = "meatnsweet@abv.bg";
 
    $email_subject = "Meat And Sweet Contact Form";
 
 
 
 
    $sender_name = $_POST['sender_name']; // required
 
    $email_from = $_POST['emailid']; // required
 
    $telnum = $_POST['telnum']; // not required
 
    $contact_message = $_POST['contact_message']; // required
 
     
 
    //$email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
    $email_message = "Form details below.\n\n";
 
     
 
    function clean_string($string) {
 
      $bad = array("content-type","bcc:","to:","cc:","href");
 
      return str_replace($bad,"",$string);
 
    }
 
     
 
    $email_message .= "Sender's Name: ".clean_string($sender_name)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";
 
    $email_message .= "Telephone: ".clean_string($telnum)."\n";
 
    $email_message .= "Message Text: ".clean_string($contact_message)."\n";
 
     
 
     
 
// create email headers
 
$headers = 'From: '.$email_from."\r\n".
 
'Reply-To: '.$email_from."\r\n" .
 
'X-Mailer: PHP/' . phpversion();
 
@mail($email_to, $email_subject, $email_message, $headers);  
 
} 
?>



</body>
</html>