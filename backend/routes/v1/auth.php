<?php

use App\Http\Controllers\v1\AuthController;
use App\Http\Middleware\UserIsAuthenticated;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'login']);


Route::middleware(UserIsAuthenticated::class)->group(function() {
    Route::post('logout', [AuthController::class, 'logout']);
});
