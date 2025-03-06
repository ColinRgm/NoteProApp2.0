<?php

use Illuminate\Support\Facades\Route;

// Call controllers
use App\Http\Controllers\API\RoleUserController;
use App\Http\Controllers\API\GradeController;
use App\Http\Controllers\API\BrancheController;


Route::apiResource('roles', RoleUserController::class);

Route::apiResource('grades', GradeController::class);

// Route::apiResource('branches', BrancheController::class);

Route::get('/addGrade', [BrancheController::class, 'index']);
