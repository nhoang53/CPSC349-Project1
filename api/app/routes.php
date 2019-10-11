<?php
declare(strict_types=1);

use App\Application\Actions\User\ListUsersAction;
use App\Application\Actions\User\ViewUserAction;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\App;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

use \Firebase\JWT\JWT;

return function (App $app) {
    $app->get('/', function (Request $request, Response $response) {
        $response->getBody()->write('Hello world!');
        return $response;
    });

    $app->group('/api', function (Group $group) {
        $group->group('/users', function (Group $group) {
            $group->get('', ListUsersAction::class);
            $group->get('/{id}', ViewUserAction::class);
        });

        $group->post('/auth', function (Request $request, Response $response, $args) {
            $content_type = $request->getHeaderLine('Content-Type');

            if (strstr($content_type, 'application/json')) {
                $contents = json_decode(file_get_contents('php://input'), true);
                if (json_last_error() === JSON_ERROR_NONE) {
                    $request = $request->withParsedBody($contents);
                }
            }

            $data = array('email' => $contents['email'], 'password' => $contents['password']);
            $payload = json_encode($data);
            $response->getBody()->write($payload);

            return $response
                    ->withHeader('Content-Type', 'application/json')
                    ->withStatus(200);
        });
    });
};
