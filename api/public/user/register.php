<?php

include_once "../../tools/postHeaders.php";

include_once "../../classes/Database.php";
include_once "../../classes/User.php";

$database = new Database();

$db = $database->getConnection();

$link = $_POST["link"];

if (!empty($_POST["fullName"]) &&
    !empty($_POST["email"]) &&
    !empty($_POST["password"]) &&
    $_FILES["image"] &&
    !empty($link) &&
    !empty($_POST["summary"])) {
    if ($_FILES["image"]["error"] === UPLOAD_ERR_OK) {
        $image_name = preg_replace('/\s+/', '-', $_FILES["image"]["name"]);
        $image_tmp_name = $_FILES["image"]["tmp_name"];
        $upload_url = "/images/" . uniqid() . "-" . $image_name;
        $upload_name = ".." . $upload_url;

        $user = new User($db);

        if (!$user->exists("email", $_POST["email"])) {
            if (!$user->exists("link", $_POST["link"])) {
                if (move_uploaded_file($image_tmp_name, $upload_name)) {

                    $user->fullName = $_POST["fullName"];
                    $user->email = $_POST["email"];
                    $user->password = $_POST["password"];
                    $user->image = $upload_url;
                    $user->link = $link;
                    $user->location = $_POST["location"];
                    $user->ocupation = $_POST["ocupation"];
                    $user->summary = $_POST["summary"];

                    if ($user->create()) {
                        http_response_code(201);
                        echo json_encode(array("message" => "Success."));
                    } else {
                        http_response_code(202);
                        echo json_encode(array("message" => "Unable to create user."));
                    }
                } else {
                    http_response_code(500);
                    echo json_encode(array("message" => "Unable to upload image."));
                }
            } else {
                http_response_code(202);
                echo json_encode(array("message" => "Link already in use, please choose another one."));
            }
        } else {
            http_response_code(202);
            echo json_encode(array("message" => "Email already in use, please choose another one."));
        }
    } else {
        http_response_code(500);
        echo json_encode(array("message" => "Unable to upload image."));
    }

} else {
    http_response_code(400);
    echo json_encode(array("message" => "Data is incomplete."));
}
