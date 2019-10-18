<?php
  // required headers
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

  // include database and user
  include_once '../config/database.php';
  include_once '../php/user.php';

  // instantiate database and user object
  $database = new Database();
  $db = $database->getConnection();
  // initialize user object
  $user = new User($db);

  // query users
  $stmt = $user->read();
  $num = $stmt->rowCount();

  if($num>0){
    $user_arr = array();
    $user_arr["records"] = array();

    // retrieve our table contents
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $user_infor=array(
            "id" => $id,
            "username" => $username,
            "firstName" => $firstName,
            "lastName" => $lastName,
            "premiumUser" => $premiumUser,
            "email" => $email,
            "password" => $password,
            "location" => $location,
            "love" => $love,
            "do" => $do,
            "userLink" => $userLink,
            "photo" => $photo
        );

        array_push($user_arr["records"], $user_infor);
    }

    // set response code - 200 OK
    http_response_code(200);
    echo json_encode($user_arr);
}
else{
    // set response code - 404 Not found
    http_response_code(404);
    echo json_encode(
        array("message" => "No users found.")
    );
}
