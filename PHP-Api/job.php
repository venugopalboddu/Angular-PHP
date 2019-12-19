<?php
    header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
header('Access-Control-Allow-Headers: *');

 $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $uname = $data->uname;
    $email = $data->email;
    $edu = $data->edu;
    $course = $data->course;
  
    echo json_encode($request_body);
 
    if (isset($data)) {

        if ( empty($uname) OR empty($edu) OR empty($course) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            //Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Oops! There was a problem with your submission. Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = $email;

        // Set the email subject.
        $subject = "Job Apply For Ojas Innovative Technologies";
     
      	$headers = 'From: Ojas Innovative Technologies  <$email>' . "\r\n" .
      	           "Reply-To: venuchiru4444@gmail.com\r\n" .
      	           "Bcc: venuchiru4444@gmail.com\r\n" .
      	           "MIME-Version: 1.0\r\n" .
      	           "Content-Type: text/html; charset=ISO-8859-1\r\n"; 
        
      //$email_content = "Name: $name\n Gmail: $email\n Message: $message";

$email_content = '<html><body>';
$email_content .= "<h2 style='color: #1B2596'>Job Application</h2>";
$email_content .= "<hr/>";
$email_content .= "<h3 style='color: green'>You applied job successfully. We will get back to you soon.</h3>";
$email_content .= "</body></html>";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $headers)) {
            // Set a 200 (okay) response code.
           
            http_response_code(200);
            echo "Job applied successfully";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>
