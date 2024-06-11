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

    public function getTaskByid($task_id)
    {
        return Tasks::where('id', $task_id)->get();
    }

    public function uploadDocumento(Request $request, $task_id)
    {
        $task = Tasks::find($task_id);
        $task->documento = $request->documento;
        $path = $request->file('documento')->store('imagens/documentos');
        $task->documento = $path;
        $task->save();

        return response()->json("documento salvo com sucesso", 200);
    }
    public function deleteTask($task_id)
    {
        return Tasks::where('id', $task_id)->delete();
    }
    
    public function updateTask(Request $request, $task_id)
    {
        $data = $request->all();
        return Tasks::where('id', $task_id)->update($data);
    }

    public function getAllTasksByProject($projeto_id)
    {
        return Tasks::where('projeto_id', $projeto_id)->get();
    }

    //get all tasks by projeto_id and status
    public function getAllTasksByProjectAndStatus($projeto_id, $status)
    {
        return Tasks::where('projeto_id', $projeto_id)->where('status', $status)->get();
    }
}
