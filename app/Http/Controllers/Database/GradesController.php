<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use App\Models\Grade;

class GradesController extends Controller
{
    public function index(): JsonResponse
    {

        $grades = Grade::join('branches', 'grades.branch_id', '=', 'branches.id')
            ->select([
                'grades.id',
                'grades.name',
                'grades.pdf',
                'grades.semester',
                'grades.branch_id as id_branch',
                'branches.name as name_branch'
            ])
            ->get();

        return response()->json($grades);
    }
}
