<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projeto extends Model
{
    use HasFactory;

    protected $fillable = [
        "nome",
        "descricao",
        "nota_banca",
        "nota_media",
        "user_id",
    ];

    public function tasks()
    {
        return $this->hasMany(Tasks::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_projeto', 'projeto_id', 'user_id');
    }
}
