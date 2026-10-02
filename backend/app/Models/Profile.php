<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Profile extends Model
{

    public $table = 'profiles';
    public $primaryKey = 'pro_id';
    
    protected $fillable = [
        'pro_id',
        'pro_name',
        'pro_abilities',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function users(): HasMany
    {
        return $this->hasMany(User::class, 'usr_profile_id', 'pro_id');
    }
}
