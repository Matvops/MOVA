<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Foundation\Auth\User as Authenticable;

class User extends Authenticable
{
    public $table = 'users';
    public $primaryKey = 'usr_id';

  
    protected $fillable = [
        'usr_id',
        'usr_profile_id',
        'usr_name',
        'usr_email',
        'usr_email_verified_at',
        'usr_password',
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    public function profile(): BelongsTo
    {
        return $this->belongsTo(Profile::class, 'usr_profile_id');
    }
}
