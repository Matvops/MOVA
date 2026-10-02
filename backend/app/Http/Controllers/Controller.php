<?php

namespace App\Http\Controllers;

use App\Http\Utils\Response;

abstract class Controller
{
    
    protected function sendResponse(Response $response) {

        return response([
            'status' => $response->getStatus(),
            'message' => $response->getMessage(),
            'data' => $response->getData()
        ], $response->getCode());
    }
}
