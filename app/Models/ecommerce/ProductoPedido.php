<?php

namespace App\Models\ecommerce;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductoPedido extends Model
{
    use HasFactory;
    protected $fillable = [
        'pedido_id',
        'producto_id',
        'cantidad',
        'precio'
    ];

}
