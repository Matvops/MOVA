<?php 

namespace App\Repositories;

use App\Models\Profile;
use Illuminate\Database\Eloquent\Collection;

class ProfileRepository {


    public function getAll(): ?Collection
    {
        return Profile::all();
    }
}