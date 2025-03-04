<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class BranchController extends Controller
{
    public function index(): JsonResponse {
        $branch = DB::table('branchs')->get();

        return response()->json($branch);
    }
}
