<?php

namespace App\Http\Controllers\v1;

use App\Dtos\Auth\Login\LoginRequestDTO;
use App\Http\Controllers\Controller;
use App\Http\Requests\v1\Auth\LoginRequest;
use App\Http\Requests\v1\Auth\LogoutRequest;
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

    public function logout(LogoutRequest $request) {

        $response = $this->service->logout($request->input('user'));

        return $this->sendResponse($response);
    }
}
