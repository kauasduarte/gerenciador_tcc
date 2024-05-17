<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('last_name')->nullable();
            $table->enum('tipo_usuario', ['aluno', 'orientador', 'banca', 'coordenador']);
            $table->string('cpf')->unique();
            $table->date('birth')->nullable();
            $table->string('curso')->nullable();
            $table->string('instituicao')->nullable(); 
            $table->string('departamento')->nullable();
            $table->string('matricula')->unique();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'last_name', 
                'tipo_usuario', 
                'cpf', 
                'birth', 
                'curso', 
                'instituicao', 
                'departamento', 
                'matricula'
            ]);
        });
    }
};
