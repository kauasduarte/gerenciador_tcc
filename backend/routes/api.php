<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\TasksController;
use App\Http\Controllers\ProjetoController;
use App\Http\Controllers\UserProjectController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UsersController::class, 'register']);
Route::post('/login', [UsersController::class, 'login']);

// Rotas de user
Route::get('/user/getUser/{user_id}', [UsersController::class,'getUserById']);

// Rotas de task 
Route::post('/tarefa/create', [TasksController::class,'createTask']);
Route::get('/tarefa/getTaskByid/{task_id}', [TasksController::class,'getTaskByid']);
Route::delete('/tarefa/deleteTask/{task_id}', [TasksController::class,'deleteTask']);
Route::put('/tarefa/updateTask/{task_id}', [TasksController::class,'updateTask']);
Route::get('/tarefa/getAllTasksByProject/{projeto_id}', [TasksController::class,'getAllTasksByProject']);
Route::get('/tarefa/getAllTasksByProjectAndStatus/{projeto_id}/{status}', [TasksController::class,'getAllTasksByProjectAndStatus']);
Route::post('/tarefa/uploadDocumento/{task_id}', [TasksController::class,'uploadDocumento']);

// Rotas do projeto
Route::post('/projeto/create', [ProjetoController::class,'createProject']);
Route::get('/projeto/getProjetoByid/{projeto_id}', [ProjetoController::class,'getProjetoByid']);
Route::delete('/projeto/deleteProject/{projeto_id}', [ProjetoController::class,'deleteProject']);
Route::put('/projeto/updateProject/{projeto_id}', [ProjetoController::class,'updateProject']);
Route::get('/projeto/getAllProjects', [ProjetoController::class,'getAllProjects']);
Route::put('/projeto/updateaNotaMedia/{projeto_id}', [ProjetoController::class,'updateaNotaMedia']);

// Rotas de user_project
Route::post('/user_project/create', [UserProjectController::class,'createProject']);
Route::get('/user_project/getAllProjects/{user_id}', [UserProjectController::class,'getAllProjects']);
Route::delete('/user_project/deleteProject/{projeto_id}', [UserProjectController::class,'deleteProject']);
Route::get('/user_project/getProjectsByUser/{user_id}', [UserProjectController::class,'getProjectsByUser']);
Route::get('/user_project/getUsersByProject/{projeto_id}', [UserProjectController::class,'getUsersByProject']);
Route::get('/user_project/getAllDatas', [UserProjectController::class,'getAllDatas']);
Route::get('/user_project/getProjectWithUsers/{projeto_id}', [UserProjectController::class,'getAllUsersDataByProjectId']);
Route::delete("/user_project/deleteUser/{user_id}/{projeto_id}", [UserProjectController::class, "deleteUserIdFromProject"]);
