<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UsersSeeder extends Seeder
{
    public function run(): void
    {
        // Alunos
        User::firstOrCreate([
            'name' => 'Kaua',
            'last_name' => 'Duarte',
            'tipo_usuario' => 'aluno',
            'cpf' => '12345678901',
            'birth' => '1995-05-15',
            'curso' => 'ADS',
            'instituicao' => 'FATEC',
            'departamento' => 'TI',
            'matricula' => '1',
            'email' => 'kaua@email.com',
            'password' => 'kaua123',
        ]);

        User::firstOrCreate([
            'name' => 'Maria',
            'last_name' => 'Silva',
            'tipo_usuario' => 'aluno',
            'cpf' => '22345678901',
            'birth' => '1996-06-16',
            'curso' => 'ADS',
            'instituicao' => 'FATEC',
            'departamento' => 'TI',
            'matricula' => '2',
            'email' => 'maria@email.com',
            'password' => 'maria123',
        ]);

        User::firstOrCreate([
            'name' => 'João',
            'last_name' => 'Pereira',
            'tipo_usuario' => 'aluno',
            'cpf' => '32345678901',
            'birth' => '1997-07-17',
            'curso' => 'ADS',
            'instituicao' => 'FATEC',
            'departamento' => 'TI',
            'matricula' => '3',
            'email' => 'joao@email.com',
            'password' => 'joao123',
        ]);

        User::firstOrCreate([
            'name' => 'Ana',
            'last_name' => 'Lima',
            'tipo_usuario' => 'aluno',
            'cpf' => '42345678901',
            'birth' => '1998-08-18',
            'curso' => 'ADS',
            'instituicao' => 'FATEC',
            'departamento' => 'TI',
            'matricula' => '4',
            'email' => 'ana@email.com',
            'password' => 'ana123',
        ]);

        // Orientadores
        User::firstOrCreate([
            'name' => 'André',
            'last_name' => 'Nery',
            'tipo_usuario' => 'orientador',
            'cpf' => '98765432101',
            'birth' => '1990-01-01',
            'curso' => 'ADS',
            'instituicao' => 'FATEC',
            'departamento' => 'TI',
            'matricula' => '5',
            'email' => 'andre@email.com',
            'password' => 'andre123',
        ]);

        User::firstOrCreate([
            'name' => 'Fernanda',
            'last_name' => 'Alves',
            'tipo_usuario' => 'orientador',
            'cpf' => '98765432102',
            'birth' => '1985-02-02',
            'curso' => 'ADS',
            'instituicao' => 'FATEC',
            'departamento' => 'TI',
            'matricula' => '6',
            'email' => 'fernanda@email.com',
            'password' => 'fernanda123',
        ]);

        // Coordenador
        User::firstOrCreate([
            'name' => 'Thalita',
            'last_name' => 'Bispo',
            'tipo_usuario' => 'coordenador',
            'cpf' => '12312312301',
            'birth' => '1980-03-03',
            'curso' => 'ADS',
            'instituicao' => 'FATEC',
            'departamento' => 'TI',
            'matricula' => '7',
            'email' => 'thalita@email.com',
            'password' => 'thalita123',
        ]);

        // Banca
        User::firstOrCreate([
            'name' => 'Carlos',
            'last_name' => 'Moura',
            'tipo_usuario' => 'banca',
            'cpf' => '32132132101',
            'birth' => '1975-04-04',
            'curso' => 'ADS',
            'instituicao' => 'FATEC',
            'departamento' => 'TI',
            'matricula' => '8',
            'email' => 'carlos@email.com',
            'password' => 'carlos123',
        ]);
    }
}
