<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class GradesController extends Controller
{
    public function index(): JsonResponse
    {
        $grades =
            "
            SELECT
                grades.id,
                grades.name,
                grades.pdf,
                grades.semester,
                branch_id as id_branch,
                name as name_branch
            FROM grades
            JOIN branchs ON grades.branch_id = branchs.id
            ";



        return response()->json($grades);
    }
}
