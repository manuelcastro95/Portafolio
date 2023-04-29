<?php

namespace App\Models\ecommerce;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'slug',
        'descripción',
        'categoria_padre_id'
    ];

    public function productos(){
        return $this->hasMany(Producto::class);
    }

    public function categoria_padre(){
        return $this->belongsTo(Categoria::class, 'categoria_padre_id');
    }
}
