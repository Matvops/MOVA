<?php 

namespace App\Exceptions;

use Exception;

class NotFoundResourceException extends Exception {

    public function __construct(string $message = "Você não possui autorização ou o recurso não foi encontrado.", int $code = 404)
    {
        return parent::__construct($message, $code);
    }
}