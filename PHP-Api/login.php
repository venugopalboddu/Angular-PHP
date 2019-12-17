<?php
    
    require 'dbconnection.php';
    header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
    
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $uname = $data->uname;
    $password = $data->password;
  
    //echo json_encode($request_body);
  
       if(isset($data)) {
      
      $sql = "SELECT uname, password FROM ojas WHERE uname = '$uname' and password = '$password'";
      $result = mysqli_query($conn,$sql);
      $row = mysqli_fetch_assoc($result);
      $active = $row['active'];
      
      $count = mysqli_num_rows($result);
	  //echo json_encode($count);
      if($count == 1) {
        echo "login successfully";
      }else {
         echo "Your Login Name or Password is invalid";
      }
   }
    
?>