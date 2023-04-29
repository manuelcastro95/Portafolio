<?php

namespace App\Models\ecommerce;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'numero_pedido',
        'metodo_de_pago',
        'estado_de_pago',
        'cantidad_total'
    ];


    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
