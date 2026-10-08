<?php

namespace App\Services\v1;

use App\Dtos\Auth\Login\LoginRequestDTO;
use App\Exceptions\NotFoundResourceException;
use App\Exceptions\ValidationException;
use App\Http\Resources\Auth\AuthenticationResource;
use App\Http\Utils\Response;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Throwable;

class AuthService {

    private UserRepository $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function login(LoginRequestDTO $request): Response
    {
        try {
            
            $user = $this->userRepository->getByEmail($request->email);

            if(!$user) throw new NotFoundResourceException('Email ou senha inválido.', 400);

            if(Hash::check($request->password, $user->usr_password) === false) 
                throw new ValidationException('Email ou senha inválido.');
                       
            $profile = $user->profile;

            $token = $user->createToken(Request::userAgent(), $profile->pro_abilities);

            $authentication = AuthenticationResource::make($user)->additional(['token' => $token->plainTextToken]);

            return Response::successfully('Login realizado com sucesso', $authentication);
        } catch (NotFoundResourceException|ValidationException $e) {
            return Response::error($e->getMessage(), code: $e->getCode());
        } catch (Throwable $e) {    
            return Response::error("Erro inesperado ao realizar login");
        }   
    }
}