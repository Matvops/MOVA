<?php

namespace Database\Seeders;

use App\Models\User;
use Exception;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $users = 3;

        for($i = 1; $i <= 3; $i++) {

            for($u = 1; $u <= $users; $u++) {
                $user = new User();
                $user->usr_profile_id = $i;
                $user->usr_name = $this->getName($i) . " $u";
                $user->usr_email = $u . $this->getEmail($i);
                $user->usr_password = Hash::make('admin123');
                $user->save();
            }

            $users--;
        }

    }

    private function getName(int $i) {
        switch($i) {
            case 1:
                return 'ATENDENTE';
            case 2:
                return 'GESTOR';
            case 3:
                return 'ADMINISTRADOR';
            default: 
                throw new Exception();
        }
    }

    private function getEmail(int $i) {
        switch($i) {
            case 1:
                return 'atendente@example.com';
            case 2:
                return 'gestor@example.com';
            case 3:
                return 'administrador@example.com';
            default: 
                throw new Exception();
        }
    }
}
