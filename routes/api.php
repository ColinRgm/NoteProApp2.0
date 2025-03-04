<?php

use App\Http\Controllers\BranchController;

Route::get('/branches', [BranchController::class, 'index']);
