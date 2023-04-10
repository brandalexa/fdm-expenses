<?php
include 'RegisterUser.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data['username'];
    $password = $data['password'];

    $registerUser = new RegisterUser($username, $password);

    if ($registerUser->error) {
        http_response_code(400);
        echo json_encode(['error' => $registerUser->error]);
    } else {
        http_response_code(200);
        echo json_encode(['success' => $registerUser->success]);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request method']);
}