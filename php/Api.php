<?php

require_once ("Connection.php");








// Class and its functions

class Db_controller{

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

$my_controller = new Db_controller();
echo $my_controller -> random_gen($db);

?>