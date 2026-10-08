<?php

namespace App\Http\Resources\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthenticationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'user' => [
                'user' => $this->usr_id,
                'abilities' => $this->profile->pro_abilities,
                'profile' => $this->profile->pro_name,
                'name' => $this->usr_name,
                'email' => $this->usr_email,
                'branch' => 'Curitiba',
            ],
            'token' => $this->additional['token'],
        ];
    }
}
