<?php

namespace App\Models\ecommerce;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    use HasFactory;
    protected $fillable = [
        'pedido_id',
        'metodo_de_pago',
        'estado_de_pago',
        'cantidad',
        'transaccion_id'
    ];

    public function pedido(){
        return $this->belongsTo(Pedido::class);
    }
}
