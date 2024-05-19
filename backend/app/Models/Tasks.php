<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tasks extends Model
{
    use HasFactory;
    protected $fillable = [
        "name",
        "description",
        "data_publicacao",
        "data_entrega",
        "projeto_id",
        "documento",
        "documento_nome",
        "status"
    ];
}
