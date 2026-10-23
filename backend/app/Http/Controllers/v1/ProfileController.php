<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Services\v1\ProfileService;

class ProfileController extends Controller
{

    private ProfileService $service;

    public function __construct(ProfileService $service)
    {
        $this->service = $service;
    }

    public function getAll() {
        $response = $this->service->getProfiles();
        return $this->sendResponse($response);
    }
}
