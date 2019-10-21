<?php

include_once "../../tools/postHeaders.php";

include_once "../../config/core.php";
include_once "../../classes/Database.php";

require "../../vendor/autoload.php";
use \Firebase\JWT\JWT;

$database = new Database();

$db = $database->getConnection();

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->fullName) &&
    !empty($data->email)) {

    $user = new User($db);

    $user->email = $data->email;

    if ($user->exists()) {
        if (password_verify($data->password, $user->password)) {
            $token = array(
                "iss" => $iss,
                "aud" => $aud,
                "iat" => $iat,
                "nbf" => $nbf,
                "data" => array(
                    "fullName" => $user->fullName,
                    "email" => $user->email,
                    "image" => $user->image,
                    "link" => $user->link,
                    "summary" => $user->summary,
                    "location" => $user->location,
                    "ocupation" => $user->ocupation,
                    "pro" => $user->pro,
                    "github" => $user->github,
                    "linkedIn" => $user->linkedIn,
                    "facebook" => $user->facebook,
                    "twitter" => $user->twitter,
                    "instagram" => $user->instagram,
                    "youtube" => $user->youtube,
                ),
            );

            $jwt = JWT::encode($token, $key);

            http_response_code(200);
            echo json_encode(
                array(
                    "message" => "Success.",
                    "jwt" => $jwt,
                )
            );
        } else {
            http_response_code(202);
            echo json_encode(array("message" => "Wrong password."));
        }
    } else {
        http_response_code(202);
        echo json_encode(array("message" => "Email does not exists."));
    }
} else {
    http_response_code(400);
    echo json_encode(array("message" => "Data is incomplete."));
}
