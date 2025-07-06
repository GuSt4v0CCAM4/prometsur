<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home', [
        'seo' => [
            'title' => 'Prometsur',
            'description' => 'Prometsur is a platform for managing and tracking promises.',
        ]
    ]);
});
