<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projeto;

class ProjetoController extends Controller
{
    public function createProject(Request $request)
    {
        $data = $request->all();
        return Projeto::create($data);
    }

   public function getProjetoByid($projeto_id)
    {
        return Projeto::where('id', $projeto_id)->get();
    }

    public function deleteProject($projeto_id)
    {
        return Projeto::where('id', $projeto_id)->delete();
    }
    
    public function updateProject(Request $request, $projeto_id)
    {
        $data = $request->all();
        return Projeto::where('id', $projeto_id)->update($data);
    }
    
    public function getAllProjects()
    {
        return Projeto::all();
    }
}