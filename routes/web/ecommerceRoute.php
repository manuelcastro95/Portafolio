<?php

use App\Http\Controllers\ecommerce\ProductoController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'e-commerce/'], function () {

    Route::get('dashboard', function () {
        return view('layouts.admin.app');
    })->name('dashboard');

    Route::get('', function () {
        return view('ecommerce.index');
    })->name('inicio');

    Route::get('acerca-de-nosotros', function () {
        return view('ecommerce.acerca_de_nosotros');
    })->name('acerca.nosotros');
    Route::get('contactanos', function () {
        return view('ecommerce.contactanos');
    })->name('contactanos');


    //Productos
    Route::group(['prefix' => 'productos'], function () {
        Route::get('', [ProductoController::class, 'index'])->name('productos.index');
        Route::post('store', [ProductoController::class, 'store'])->name('productos.store');
        Route::post('{producto}/show', [ProductoController::class, 'show'])->name('productos.show'); 
    });
});