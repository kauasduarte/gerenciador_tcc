<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserProjeto extends Model
{
    use HasFactory;
    protected $fillable = [
        "user_id",
        "projeto_id",
    ];
        
}
