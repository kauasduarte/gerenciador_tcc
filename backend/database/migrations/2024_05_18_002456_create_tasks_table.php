<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('titulo');
            $table->string('descricao')->nullable();
            $table->binary('documento')->nullable();
            $table->string('documento_nome')->nullable();
            $table->boolean('status')->nullable(false);
            $table->date('data_publicacao');
            $table->date('data_entrega');
            $table->foreignId('projeto_id')->constrained('projeto')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
