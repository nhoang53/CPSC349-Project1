<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// required to encode json web token
include_once '../config/core.php';
include_once '../libs/php-jwt-master/src/BeforeValidException.php';
include_once '../libs/php-jwt-master/src/ExpiredException.php';
include_once '../libs/php-jwt-master/src/SignatureInvalidException.php';
include_once '../libs/php-jwt-master/src/JWT.php';
use \Firebase\JWT\JWT;
// files needed to connect to database
include_once '../config/database.php';
include_once '../php/user.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare user object
$user = new user($db);

// get posted of user to be edited
$data = json_decode(file_get_contents("php://input"));
// get jwt
$jwt=isset($data->jwt) ? $data->jwt : "";

if($jwt){
    try {
      $decoded = JWT::decode($jwt, $key, array('HS256'));

      // set user property values
      //$user->username = $data->username;
      $user->firstName = $data->firstName;
      $user->lastName = $data->lastName;
      $user->premiumUser = $data->premiumUser;
      $user->email = $data->email;
      $user->password = $data->password;
      $user->location = $data->location;
      $user->love = $data->love;
      $user->do = $data->do;
      $user->userLink = $data->userLink;
      $user->photo = $data->photo;

      $user->id = $decoded->data->id;

      // echo "firstName: " .$user->firstName. " ";
      // echo "id: " .$user->id;

      // update the user
      if($user->update()){
        // Re-generate jwt because user details might be different
        $token = array(
         "iss" => $iss,
         "aud" => $aud,
         "iat" => $iat,
         "nbf" => $nbf,
         "data" => array(
             "id" => $user->id,
             "firstName" => $user->firstName,
             "lastName" => $user->lastName,
             "premiumUser" => $user->premiumUser,
             "email" => $user->email,
             "password" => $user->password,
             "location" => $user->location,
             "love" => $user->love,
             "do" => $user->do,
             "userLink" => $user->userLink,
             "photo" => $user->photo
         )
        );
        $jwt = JWT::encode($token, $key);
        // set response code
        http_response_code(200);

        // response in json format
        echo json_encode(
              array(
                  "message" => "User was updated.",
                  "jwt" => $jwt
          ));
      }
      // if unable to update the user, tell the user
      else{
          // set response code - 503 service unavailable
          http_response_code(503);
          echo json_encode(array("message" => "Unable to update user."));
      }
    }
    catch (Exception $e){
      // set response code
      http_response_code(401);
      echo json_encode(array(
          "message" => "Access denied.",
          "error" => $e->getMessage()
        ));
    }
}

// error message if jwt is empty will be here





?>
