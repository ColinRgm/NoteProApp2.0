<?php

use App\Http\Controllers\Database\GradesController;
use App\Http\Controllers\Database\BranchController;
use App\Http\Controllers\Database\RoleController;
use Illuminate\Support\Facades\Route;

Route::prefix('')->group(function() {
    Route::get('/roles', [RoleController::class, 'index']);

    Route::get('/branches', [BranchController::class, 'getBranches']);

    Route::get('/grades', [GradesController::class, 'index']);
});
