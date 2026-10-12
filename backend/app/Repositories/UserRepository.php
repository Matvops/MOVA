<?php 

namespace App\Repositories;

use App\Models\User;

class UserRepository {

    public function getByEmail(string $email): ?User
    {
        return User::where('usr_email', $email)->first();
    }

    public function getById(string $id): ?User
    {
        return User::where('usr_id', $id)->first();
    }
}