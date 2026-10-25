<?php 

namespace App\Services\v1;

use App\Http\Utils\Response;
use App\Repositories\ProfileRepository;

class ProfileService {

    private ProfileRepository $profileRepository;

    public function __construct(ProfileRepository $profileRepository)
    {
        $this->profileRepository = $profileRepository;
    }

    public function getProfiles(): Response
    {
        $profiles = $this->profileRepository->getAll();

        foreach($profiles as $profile) {
            $profile->users = $profile->users;
        }

        return Response::successfully("Perfis consultados com sucesso", [
            'profiles' => $profiles->toArray()
        ]);
    }

    public function getAbilities(): Response
    {
        $admin = $this->profileRepository->getById(3);
        return Response::successfully('Permissões consultadas com sucesso', [
            'abilities' => $admin->pro_abilities
        ]);
    }
}