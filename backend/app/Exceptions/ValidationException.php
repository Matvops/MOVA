<?php 

namespace App\Exceptions;

use Exception;

class ValidationException extends Exception {

    public function __construct(string $message = "Recurso inválido", int $code = 400)
    {
        return parent::__construct($message, $code);
    }
}