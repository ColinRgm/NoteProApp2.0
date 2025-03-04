<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class GradesController extends Controller
{
    public function index(): JsonResponse
    {
        $grade = DB::table('grades')->get();

        return response()->json($grade);
    }
}
