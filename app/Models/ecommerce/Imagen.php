<?php

namespace App\Models\ecommerce;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imagen extends Model
{
    use HasFactory;
    protected $fillable = [
        'imagen_type',
        'imagen_id',
        'ruta',
        'descripcion'
    ];

    //Relacion morfica
    public function imagenes(){
        return $this->morphTo();
    }
}
