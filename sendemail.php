<?php
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

$mail = new PHPMailer(true);


$alert = '';

if(isset($_POST['submit'])){
  $fName = $_POST['firstName'];
  $lName = $_POST['lastName'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $package = $_POST['package'];
  $comment = $_POST['comment'];

  try{
    $mail->Mailer = "smtp";
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = TRUE;
    $mail->Username = 'beauty.by.brendan.sydney@gmail.com'; // Gmail address which you want to use as SMTP server
    $mail->Password = ''; // Gmail address Password
    $mail->SMTPSecure = 'tls';
    $mail->Port = '587';


    $mail->setFrom('beauty.by.brendan.sydney@gmail.com'); // Gmail address which you used as SMTP server
    $mail->addAddress('beauty.by.brendan.sydney@gmail.com'); // Email address where you want to receive emails (you can use any of your gmail address including the gmail address which you used as SMTP server)

    $mail->isHTML(true);
    $mail->Subject = 'Enquiry From Beauty By Brendan';
    $mail->Body = "<h3>First Name: $fName <br>Last Name: $lName <br>Email: $email <br>Phone: $phone <br>Package: $package <br>Comment: $comment</h3>";

    $mail->send();
    $alert = '<div class="alert-success">
                 <span>Message Sent! Thank you for contacting us.</span>
                </div>';
  } catch (Exception $e){
    $alert = '<div class="alert-error">
                <span>'.$e->getMessage().'</span>
              </div>';
  }
}
?>
