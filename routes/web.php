<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('firstYear', function () {
        return Inertia::render('firstYear');
    })->name('firstYear');

    Route::get('secondYear', function () {
        return Inertia::render('secondYear');
    })->name('secondYear');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
