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
            "nome" => "Klubinhos",
            "descricao" => "Rede Social de clube de leitura",
            "user_id" => 5,
        ]);

        Projeto::createOrFirst([
            "nome" => "Procafeinação",
            "descricao" => "Procrastinação e café",
            "user_id" => 5,
        ]);

        Projeto::createOrFirst([
            "nome" => "FatecC",
            "descricao" => "Gestão de TCC da FATEC",
            "user_id" => 6,
        ]);
    }
}
