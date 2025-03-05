<?php

use App\Http\Controllers\API\RoleUserController;
use App\Http\Controllers\Database\BranchController;
use App\Http\Controllers\Database\GradesController;
use App\Http\Controllers\Database\RoleController;
use Illuminate\Support\Facades\Route;


/*Route::get('/roles', [RoleController::class, 'getRoles']);

Route::get('/branches', [BranchController::class, 'getBranches']);

Route::get('/grades', [GradesController::class, 'index']);*/

Route::apiResource('roles', RoleUserController::class);
