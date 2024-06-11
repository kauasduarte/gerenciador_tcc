<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserProject;
use App\Models\Projeto;
use App\Models\User;

class UserProjectController extends Controller
{
    public function createProject(Request $request)
    {
        $data = $request->all();
        return UserProject::create($data);
    }

    public function getAllProjects($user_id)
    {
        $user = User::find($user_id);

        if ($user) {
            return response()->json($user->projetos, 200);
        }

        return response()->json(['error' => 'User not found'], 404);
    }

    public function deleteProject($projeto_id)
    {
        return UserProject::where('projeto_id', $projeto_id)->delete();
    }

    public function getProjectWithUsers($projeto_id)
    {
        $projeto = Projeto::with('users')->find($projeto_id);

        if ($projeto) {
            return response()->json($projeto, 200);
        }

        return response()->json(['error' => 'Project not found'], 404);
    }
}
