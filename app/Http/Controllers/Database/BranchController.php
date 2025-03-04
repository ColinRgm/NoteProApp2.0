<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Models\Branches;

class BranchController extends Controller
{
    public function getBranches()
    {
        $branches = Branches::where('name', 'LIKE', '%CIE%')->get();

        return response()->json($branches);
    }
}

