<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Models\Role;

class RoleController extends Controller
{
    public function getRoles()
    {
        $roles = Role::all();

        return response()->json($roles);
    }
}
