<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Projeto;
use App\Models\User;
use App\Models\UserProject;

class ProjetoController extends Controller
{
    public function createProject(Request $request)
    {
        $projeto = new Projeto();
        $projeto->nome = $request->nome;
        $projeto->descricao = $request->descricao;
        $projeto->nota_banca = $request->nota_banca;
        $projeto->nota_media = $request->nota_media;
        $projeto->user_id = $request->user_id;
        $projeto->save();

        $userProject = new UserProject();
        $userProject->user_id = $request->user_id;
        $userProject->project_id = $projeto->id;
        $userProject->save();

        return response()->json([
            'projeto' => $projeto,
            'userProject' => $userProject,
        ], 201);
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

    public function updateaNotaMedia(Request $request, $projeto_id)
    {
        $projeto = new Projeto();
        $data = $projeto->find($projeto_id);
        $data->nota_media = $request->nota_media;
        $data->save();

        return response()->json($data, 200);
    }
    
    public function getAllProjects()
    {
        return Projeto::all();
    }
}
