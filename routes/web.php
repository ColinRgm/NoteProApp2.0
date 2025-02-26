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

    Route::get('thirdYear', function () {
        return Inertia::render('thirdYear');
    })->name('thirdYear');

    Route::get('fourthYear', function () {
        return Inertia::render('fourthYear');
    })->name('fourthYear');

    Route::get('addGrade', function () {
        return Inertia::render('addGrade');
    })->name('addGrade');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
