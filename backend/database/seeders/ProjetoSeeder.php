<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Projeto;

class ProjetoSeeder extends Seeder
{
    public function run(): void
    {
        Projeto::createOrFirst([
            "nome" => "Projeto 1",
            "descricao" => "Descrição do projeto 1",
            "user_id" => 1,
        ]);

        Projeto::createOrFirst([
            "nome" => "Projeto 2",
            "descricao" => "Descrição do projeto 2",
            "user_id" => 2,
        ]);

        Projeto::createOrFirst([
            "nome" => "Projeto 3",
            "descricao" => "Descrição do projeto 3",
            "user_id" => 3,
        ]);
    }
}
