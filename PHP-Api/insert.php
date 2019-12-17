<?php
    
    require 'dbconnection.php';
    header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
    
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $email = $data->email;
    $uname = $data->uname;
    $password = $data->password;
  
    
    echo json_encode($request_body);
    if(isset($data)){
        
    $sql = "INSERT INTO ojas(email,uname,password)
        VALUES ('$email','$uname','$password')";
    $result = mysqli_query($conn,$sql);
    
    }
?>