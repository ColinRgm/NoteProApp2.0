<?php

use App\Models\Branches;
use Illuminate\Http\JsonResponse;

class BranchController extends Controller
{
    public function index(): JsonResponse {
        $branches = Branches::all();

        return response()->json($branches);
    }
}

