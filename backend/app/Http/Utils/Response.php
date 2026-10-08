<?php 

namespace App\Http\Utils;

use Illuminate\Http\Resources\Json\JsonResource;

class Response {
    
    private bool $status;
    private string|null $message;
    private object $data;
    private int $code;

    private function __construct(bool $status, string|null $message, array|JsonResource|null $data, int $code)
    {
        $this->status = $status;
        $this->message = $message;
        $this->data = (object) $data ?? [];
        $this->code = $code;
    }

    public static function successfully(string|null $message, array|JsonResource|null $data = null, int $code = 200): self
    {
        return new self(
            status: true,
            message: $message,
            data: $data,
            code: $code
        );
    }

    public static function error(string|null $message, array|null $data = null, int $code = 500): self
    {
        return new self(
            status: false,
            message: $message,
            data: $data,
            code: $code
        );
    }

    public function getStatus(): bool
    {
        return $this->status;
    }

    public function getMessage(): string|null
    {
        return $this->message;
    }

    public function getData(): object
    {
        return $this->data;
    }

    public function getCode(): int
    {
        return $this->code;
    }

}