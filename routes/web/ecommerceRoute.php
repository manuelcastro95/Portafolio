<?php

use App\Http\Controllers\ecommerce\ProductoController;
use Illuminate\Support\Facades\Route;


Route::group(['prefix' => 'e-commerce/'], function () {
    Route::get('', function () {
        return view('ecommerce.index');
    });


    //Productos
    Route::group(['prefix' => 'productos'], function () {
        Route::get('', [ProductoController::class, 'index'])->name('productos.index');
        Route::post('store', [ProductoController::class, 'store'])->name('productos.store');
        Route::post('{producto}/show', [ProductoController::class, 'show'])->name('productos.show'); 
    });
});