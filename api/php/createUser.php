<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../php/user.php';

$database = new Database();
$db = $database->getConnection();

$user = new User($db);
// get posted data
$data = json_decode(file_get_contents("php://input"));

if( !empty($data->username) && !empty($data->userRole) &&
    !empty($data->firstName) && !empty($data->lastName) &&
    !empty($data->email) && !empty($data->password) &&
    !empty($data->location) && !empty($data->love) &&
    !empty($data->do) && !empty($data->userLink) &&
    !empty($data->photo))
{
    $user->username = $data->username;
    $user->userRole = $data->userRole;
    $user->firstName = $data->firstName;
    $user->lastName = $data->lastName;
    $user->email = $data->email;
    $user->password = $data->password;
    $user->location = $data->location;
    $user->love = $data->love;
    $user->do = $data->do;
    $user->userLink = $data->userLink;
    $user->photo = $data->photo;

    // create the user
    if($user->create()){
        // set response code - 201 created
        http_response_code(201);
        echo json_encode(array("message" => "user was created."));
    }
    else{
        // set response code - 503 service unavailable
        http_response_code(503);
        echo json_encode(array("message" => "Unable to create user."));
    }
}
// tell the user data is incomplete
else{
    // set response code - 400 bad request
    http_response_code(400);
    echo json_encode(array("message" => "Unable to create user. Data is incomplete."));
}
?>
