<?php
     require 'dbconnection.php';
    header('Content-type: application/json');
	header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Headers: X-Requested-With, content-type, access-control-allow-origin, access-control-allow-methods, access-control-allow-headers');
    
    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);
    $uname = $data->uname;
    $email = $data->email;


        if(isset($data)) {
            $sql="select uname,email from ojas where (uname='$uname' or email='$email');";
            $res=mysqli_query($conn,$sql);
            if (mysqli_num_rows($res) > 0) {
            // output data of each row
            $row = mysqli_fetch_assoc($res);
            if ($uname==$row['uname'])
            {
                echo "Username already exists";
            }
            elseif($email==$row['email'])
            {
                echo "Email already exists";
            }
        }else { //here you need to add else condition
            echo "alright";
        }
        }
    
    ?>