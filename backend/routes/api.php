<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use app\Http\Controllers\UsersController;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\ProjetoController;
use App\Http\Controllers\UserProjectController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);


//rotas de task 
Route::post('/tarefa/create', [UsersController::class,'createTask']);
Route::get('/tarefa/getAllTasks/{projeto_id}', [UsersController::class,'getAllTasks']);

// rotas do projeto
Route::post('/projeto/create', [ProjetoController::class,'createProject']);
Route::get('/projeto/getProjetoByid/{projeto_id}', [ProjetoController::class,'getProjetoByid']);
Route::delete('/projeto/deleteProject/{projeto_id}', [ProjetoController::class,'deleteProject']);
Route::put('/projeto/updateProject/{projeto_id}', [ProjetoController::class,'updateProject']);
Route::get('/projeto/getAllProjects', [ProjetoController::class,'getAllProjects']);

//rotas de tasks
Route::post('/tarefa/create', [TasksController::class,'createTask']);
Route::get('/tarefa/getAllTasks/{projeto_id}', [TasksController::class,'getAllTasks']);
Route::delete('/tarefa/deleteTask/{task_id}', [TasksController::class,'deleteTask']);

//rotas de user_project
Route::post('/user_project/create', [UserProjectController::class,'createProject']);
Route::get('/user_project/getAllProjects/{user_id}', [UserProjectController::class,'getAllProjects']);
Route::delete('/user_project/deleteProject/{projeto_id}', [UserProjectController::class,'deleteProject']);
Route::get('/user_project/getProjectsByUser/{user_id}', [UserProjectController::class,'getProjectsByUser']);
Route::get('/user_project/getUsersByProject/{projeto_id}', [UserProjectController::class,'getUsersByProject']);
Route::get('/user_project/getAllDatas', [UserProjectController::class,'getAllDatas']);