<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;

class UserIsAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $token = $request->header('Authorization', null);

        if ($token === null) {
            return response([
                'status' => false,
                'message' => 'Usuário não autenticado',
                'data' => (object) []
            ], 401);
        }

        if(str_contains($token, 'Bearer ') === false) {
            return response([
                'status' => false,
                'message' => 'Usuário não autenticado',
                'data' => (object) []
            ], 401);
        }

        $token = substr(str_replace('Bearer ', '', $token), 3);

        $tokenExists = PersonalAccessToken::findToken($token);

        if ($tokenExists === null) {
            return response([
                'status' => false,
                'message' => 'Usuário não autenticado',
                'data' => (object) []
            ], 401);
        }

        return $next($request);
    }
}
