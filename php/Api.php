<?php

session_start();
require_once ("Connection.php");


$my_controller = new Db_controller();
//echo $my_controller -> random_gen($db);

if ($_POST) {
    
    if($_POST['email_reg']){
      echo $my_controller -> register_client($db,$_POST['email_reg'], $_POST['first_name'], $_POST['last_name'], $_POST['phone_no'], $_POST['password'], $_FILES['pasth'])
      exit();
    }
    if($_POST['email_log']){
     $my_controller -> login($db,$_POST['email_log'],$_POST['password'])

     if ($_SESSION['id'] != null) {
         # code...
         if($_SESSION['role'] == 'client'){
            header('Location: http://localhost/investment/client.html');
            exit;
         }elseif ($_SESSION['role'] == 'admin') {
             # code...
             header('Location: http://localhost/investment/admin.html');
             exit;
         }
     }
    }
    

}




// Class and its functions

class Db_controller{

    function login($db,$email,$password){
        $query = "SELECT entity_id,account_number,function_role,first_name,last_name FROM entitys WHERE email = '$email' AND entity_password = '$password'";

        $result = pg_query($db, $query);

        if (!$result) {
            
            $_SESSION['id'] =  null;
            $_SESSION['acc_no'] =  null;
            $_SESSION['role'] =  null;
            $_SESSION['fname'] =  null;
            $_SESSION['lname'] =  null;
        }
        while($row=pg_fetch_assoc($result)){


             $_SESSION['id'] =  $row['entity_id'];
             $_SESSION['acc_no'] =  $row['account_number'];
             $_SESSION['role'] =  $row['function_role'];
             $_SESSION['fname'] =  $row['first_name'];
             $_SESSION['lname'] =  $row['last_name']; 
        }

    }


    function register_client($db,$email, $fname, $lname, $phone_no, $my_pass, $path){

        $random = random_gen($db);


        if($random == '0'){

            return "Failed";
        }

        

        $query = "INSERT INTO entitys(
             account_number, email, first_name, last_name, phone_number, entity_password, image_path, function_role, activated, approved)
            VALUES ( $random, $email, $fname, $lname, $phone_no, $my_pass, $path, 'client', 'f', 'f')";


        $result = pg_query($db, $query);

        if(!$result){

            return "Client was not added";
        }
        else{
            return"Client was added to the system";
        }
    }

    function random_gen($db){

        $random = rand(0,1000000000);

        $query = "SELECT entity_id FROM entitys WHERE account_number = '$random'";

        $result = pg_query($db, $query);

        if (!$result) {
            return $random;
        }
        return 0;
    }
}


?>