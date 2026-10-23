<?php

use App\Http\Controllers\v1\ProfileController;
use App\Http\Middleware\UserIsAuthenticated;
use Illuminate\Support\Facades\Route;

Route::middleware(UserIsAuthenticated::class)->prefix('profile')->group(function() {
    Route::get('all', [ProfileController::class, 'getAll']);
});