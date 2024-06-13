<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tasks;

class TasksSeeder extends Seeder
{
    public function run(): void
    {
        Tasks::firstOrCreate([
            'titulo' => 'Definição do escopo',
            'descricao' => 'Definir o escopo completo do projeto.',
            'status' => 'todo',
            'prazo' => '2024-06-17',
            'projeto_id' => 1,
        ]);

        Tasks::firstOrCreate([
            'titulo' => 'Entregar TCC',
            'descricao' => 'Criar a arquitetura do sistema.',
            'status' => 'doing',
            'prazo' => '2024-08-01',
            'projeto_id' => 1,
        ]);

        Tasks::firstOrCreate([
            'titulo' => 'Apresentar projeto para Banca',
            'descricao' => 'Realizar os primeiros testes do sistema.',
            'status' => 'todo',
            'prazo' => '2024-08-20',
            'projeto_id' => 1,
        ]);

        // Tarefas para o projeto_id 2
        Tasks::firstOrCreate([
            'titulo' => 'Levantamento de requisitos',
            'descricao' => 'Reunir os requisitos com os stakeholders.',
            'status' => 'todo',
            'prazo' => '2024-08-01',
            'projeto_id' => 2,
        ]);

        Tasks::firstOrCreate([
            'titulo' => 'Prototipagem',
            'descricao' => 'Desenvolver protótipos das principais telas.',
            'status' => 'doing',
            'prazo' => '2024-08-10',
            'projeto_id' => 2,
        ]);

        Tasks::firstOrCreate([
            'titulo' => 'Testes de usabilidade',
            'descricao' => 'Testar a usabilidade com usuários finais.',
            'status' => 'todo',
            'prazo' => '2024-08-20',
            'projeto_id' => 2,
        ]);

        // Tarefas para o projeto_id 3
        Tasks::firstOrCreate([
            'titulo' => 'Planejamento do projeto',
            'descricao' => 'Criar um plano detalhado para o projeto.',
            'status' => 'todo',
            'prazo' => '2024-09-01',
            'projeto_id' => 3,
        ]);

        Tasks::firstOrCreate([
            'titulo' => 'Desenvolvimento do backend',
            'descricao' => 'Implementar a lógica do backend.',
            'status' => 'doing',
            'prazo' => '2024-09-15',
            'projeto_id' => 3,
        ]);

        Tasks::firstOrCreate([
            'titulo' => 'Integração de API',
            'descricao' => 'Integrar com APIs de terceiros.',
            'status' => 'todo',
            'prazo' => '2024-09-30',
            'projeto_id' => 3,
        ]);
    }
}
