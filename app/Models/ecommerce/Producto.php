<?php

namespace App\Models\ecommerce;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'slug',
        'descripción',
        'precio',
        'precio_de_venta',
        'categoria_id',
        'existencias',
        'estado',
    ];
    
    public function categoria(){
        return $this->belongsTo(Categoria::class, 'categoria_id');
    }

    // relaciones morficas
    public function imagenes_producto(){
        return $this->morphMany(Imagen::class, 'imagenes');
    }
}
