<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('table_projeto', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('descricao');
            $table->float('nota_banca');
            $table->float('nota_media');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('table_projeto');
    }
};
