<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tasks;

class TasksController extends Controller
{
    public function createTask(Request $request)
    {
        $data = $request->all();
        return Tasks::create($data);
    }

    public function getAllTasks($projeto_id)
    {
        return Tasks::where('projeto_id', $projeto_id)->get();
    }

    public function deleteTask($task_id)
    {
        return Tasks::where('id', $task_id)->delete();
    }
}
