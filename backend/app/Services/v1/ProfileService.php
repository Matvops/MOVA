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
        return Response::successfully("Perfis consultados com sucesso", [
            'profiles' => $profiles->toArray()
        ]);
    }
}