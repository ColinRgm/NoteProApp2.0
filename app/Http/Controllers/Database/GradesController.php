<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\Models\Grade;

class GradesController extends Controller
{
    public function index(): JsonResponse
    {

        $grades = Grade::join('branche', 'grades.branch_id', '=', 'branche.id')
            ->select([
                'grades.id',
                'grades.name',
                'grades.pdf',
                'grades.semester',
                'grades.branche_id as id_branche',
                'branche.name as name_branche'
            ])
            ->get();

        return response()->json($grades);
    }
}
