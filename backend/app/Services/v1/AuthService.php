<?php

namespace App\Services\v1;

use App\Dtos\Auth\Login\LoginRequestDTO;
use App\Http\Utils\Response;
use Throwable;

class AuthService {

    public function login(LoginRequestDTO $request): Response
    {
        try {

            

            return Response::successfully('Login realizado com sucesso');
        } catch (Throwable $e) {    

            return Response::error("Erro inesperado ao realizar login");
        }   
    }
}