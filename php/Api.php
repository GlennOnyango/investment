<?php

session_start();
require_once ("Connection.php");



$my_controller = new Db_controller();

if ($_POST) {
    
    if(isset($_POST['email_reg'])){

      echo $my_controller -> register_client($db,$_POST['email_reg'], $_POST['first_name'], $_POST['last_name'], $_POST['phone_no'], $_POST['password'], $_FILES['user_photo']);
      exit();
    }


    if(isset($_POST['email_reg_admin'])){

        echo $my_controller -> register_admin($db,$_POST['email_reg'], $_POST['first_name'], $_POST['last_name'], $_POST['phone_no'], $_POST['password'], $_FILES['pasth']);
        exit();
  
    }



    if(isset($_POST['email_log'])){

        $_SESSION['id'] = null;
        $my_controller -> login($db,$_POST['email_log'],$_POST['password']);

     $error_code = 0;
     $message = "";


     if ($_SESSION['id'] != null) {
        
        $error_code = 1;
        $message = $_SESSION['role'];
           
     }else{
        $message = "There was an issue with your login";
     
     }
     $response = array("code"=>$error_code, "message"=>$message);
     
     print_r(json_encode($response));
     exit();
    }
    

}

if($_GET){
    if(isset($_GET["option"])){

        //echo $_SESSION['fname'];
        //$response = array("code"=>$error_code, "message"=>$message);
     
        print_r(json_encode($_SESSION));
       
    }
}


// Class and its functions

class Db_controller{


    function random_gen($db){

        $random = rand(0,1000000000);

        $query = "SELECT entity_id FROM entitys WHERE account_number = '$random'";

        $result = pg_query($db, $query);

        if (!$result) {
            return $random;
        }
    
    return 0;
    }


    function login($db,$email,$password){
        $query = "SELECT entity_id,account_number,function_role,first_name,last_name,email,phone_number FROM entitys WHERE email = '$email' AND entity_password = '$password'";

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
             $_SESSION['pno'] = $row['phone_number'];
             $_SESSION['mail'] = $row['email'];
        }

    }


    function register_client($db,$email, $fname, $lname, $phone_no, $my_pass, $path){

        $random = $this -> random_gen($db);

        $result_from_image_path_user = $this -> familyName($path,'upload_images/');

        
        if ($result_from_image_path_user === 'File already exist' || $result_from_image_path_user === 'File not uploaded') {
            # code...
            return $result_from_image_path_user;
        }

        $query = "INSERT INTO entitys(
             account_number, email, first_name, last_name, phone_number, entity_password, image_path, function_role, activated, approved)
            VALUES ( '$random', '$email', '$fname', '$lname', '$phone_no', '$my_pass', '$result_from_image_path_user', 'client', 'f', 'f')";


        $result = pg_query($db, $query);

        if(!$result){

            return "Client was not added";
        }
        else{
            return"Client was added to the system";
        }


    }


    function register_admin($db,$email, $fname, $lname, $phone_no, $my_pass, $path){

        $random = random_gen($db);

        $result_from_image_path_user = familyName($_FILES['image_path'],'upload_images/');

        if($result == 0 ){
            return "Failed on image upload";
        }

        

        $query = "INSERT INTO entitys(
             account_number, email, first_name, last_name, phone_number, entity_password, image_path, function_role, activated, approved)
            VALUES ( $random, $email, $fname, $lname, $phone_no, $my_pass, $result_from_image_path_user, 'admin', 'f', 'f')";


        $result = pg_query($db, $query);

        if(!$result){

            return "Client was not added";
        }
        else{
            return"Client was added to the system";
        }


    }

    function familyName($filename,$folder) {

        $target_dir = $folder;
        $target_file = $target_dir . basename($filename['name']);
        $tmp_image = $filename['tmp_name'];
           $error = "";
            
           if (file_exists($target_file)) {
               $error ="File already exist";
               return $error;
           } elseif(move_uploaded_file($tmp_image, $target_file)){
               return $target_file;
              
         } else{
               $error = "File not uploaded";
               return $error;
       }               
    }
    
}


?>