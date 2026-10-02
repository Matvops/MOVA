<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\v1\Auth\LoginRequest;
use App\Services\v1\AuthService;

class AuthController extends Controller
{
    
    private AuthService $service;

    public function __construct(AuthService $authService)
    {
        $this->service = $authService;
    }

    public function login(LoginRequest $request) {

        $response = $this->service->login(LoginRequestDTO::fromRequest($request));

        return $this->sendResponse($response);
    }
}
