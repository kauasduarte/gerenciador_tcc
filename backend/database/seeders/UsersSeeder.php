<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersSeeder extends Seeder
{
    public function run(): void
    {
        // Usuário 1
        User::firstOrCreate([
            'name' => 'Kaua',
            'last_name' => 'Duarte',
            'tipo_usuario' => 'aluno',
            'cpf' => '123456789',
            'birth' => '1995-05-15',
            'curso' => 'ADS',
            'instituicao' => 'FATEC',
            'departamento' => 'TI',
            'matricula' => '1',
            'email' => 'kaua@email.com',
            'password' => 'kaua123',
        ]);

        // Usuário 2
        User::firstOrCreate([
            'name' => 'André',
            'last_name' => 'Nery',
            'tipo_usuario' => 'orientador',
            'cpf' => '987654321',
            'birth' => '1990-01-01',
            'curso' => 'ADS',
            'instituicao' => 'FATEC',
            'departamento' => 'TI',
            'matricula' => '2',
            'email' => 'andre@email.com',
            'password' => 'andre123',
        ]);

        // Usuário 3
        User::firstOrCreate([
            'name' => 'Thalita',
            'last_name' => 'Bispo',
            'tipo_usuario' => 'coordenador',
            'cpf' => '123123123',
            'birth' => '1995-05-15',
            'curso' => 'ADS',
            'instituicao' => 'FATEC',
            'departamento' => 'TI',
            'matricula' => '3',
            'email' => 'thalita@email.com',
            'password' => 'thalita123'
        ]);
    }
}
