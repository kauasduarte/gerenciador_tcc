<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use app\Http\Controllers\UsersController;
use App\Http\Controllers\TasksController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);


//rotas de task 
Route::post('/tarefa/create', [UsersController::class,'createTask']);
Route::get('/tarefa/getAllTasks/{projeto_id}', [UsersController::class,'getAllTasks']);

