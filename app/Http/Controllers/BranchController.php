<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

class BranchController extends Controller
{
    public function index(): View {
        $branch = DB::table('branchs')->get();

        return view('branch.index', ['branches' => $branch]);
    }
}
