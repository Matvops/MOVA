<?php 

namespace App\Dtos\Auth\Login;

use App\Http\Requests\v1\Auth\LoginRequest;

readonly class LoginRequestDTO {

    private function __construct(
        public string $email,
        public string $password
    )
    {}

    public static function fromRequest(LoginRequest $request): self
    {
        return new self(
            email: $request->input('email'),
            password: $request->input('password')
        );
    } 
}