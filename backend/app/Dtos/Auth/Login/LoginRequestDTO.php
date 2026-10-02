<?php 

namespace App\Dtos\Auth\Login;

readonly class LoginRequestDTO {

    private function __construct(
        public string $email,
        public string $password
    )
    {}

    public static function fromRequest(array $request): self
    {
        return new self(
            email: $request['email'],
            password: $request['password']
        );
    } 
}