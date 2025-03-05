<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Models\Branche;

class BranchController extends Controller
{
    public function getBranches()
    {
        $branches = Branche::where('name', 'LIKE', '%CIE%')->get();

        return response()->json($branches);
    }
}

