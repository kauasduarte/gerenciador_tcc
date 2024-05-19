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

        if($request->hasFile('documento')) {
            $file = $request->file('documento');
            $filename = $file->getClientOriginalName();
            $path = $file->storeAs('documentos', $filename);

            $data['documento'] = $path;
            $data['documento_nome'] = $filename;
        }

        return $this->create($data);
    }

    public function getAllTasks($projeto_id)
    {
        return Tasks::where('projeto_id', $projeto_id)->get();
    }
}
