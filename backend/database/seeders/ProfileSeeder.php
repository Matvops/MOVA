<?php

namespace Database\Seeders;

use App\Models\Profile;
use Illuminate\Database\Seeder;

class ProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $abilitiesAttendant = [
            'read:automobiles',
            'read:rentals',
            'read:clients',
            'read:maintenances',
            'write:clients',
            'write:rentals',
            'update:clients',          
            'update:rentals'          
        ];

        $attendant = new Profile();
        $attendant->pro_name = 'ATENDENTE';
        $attendant->pro_abilities = json_encode($abilitiesAttendant);
        $attendant->save();

        $abilitiesManager = [
            'read:automobiles',
            'read:rentals',
            'read:clients',
            'read:maintenances',
            'write:clients',
            'write:rentals',
            'write:automobiles',
            'write:maintenances',
            'update:automobiles',
            'update:clients',
            'update:rentals',
            'update:maintenances',
            'delete:rentals',
        ];

        $manager = new Profile();
        $manager->pro_name = 'GESTOR';
        $manager->pro_abilities = json_encode($abilitiesManager);
        $manager->save();

        $abilitiesAdministrator = [
            'read:automobiles',
            'read:rentals',
            'read:clients',
            'read:maintenances',
            'read:users',
            'read:profiles',
            'write:clients',
            'write:rentals',
            'write:automobiles',
            'write:maintenances',
            'write:users',
            'write:profiles',
            'update:automobiles',
            'update:clients',
            'update:rentals',
            'update:maintenances',
            'update:users',
            'update:profiles',
            'delete:rentals',
        ];

        $adm = new Profile();
        $adm->pro_name = 'ADMINISTRADOR';
        $adm->pro_abilities = json_encode($abilitiesAdministrator);
        $adm->save();
    }
}
