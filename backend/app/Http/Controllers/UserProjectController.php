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
        $userProject = new UserProject();
        $userProject->user_id = $request->user_id;
        $userProject->project_id = $request->project_id;
        $userProject->save();

        return response()->json($userProject, 201);
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

    public function getAllUsersDataByProjectId($projeto_id)
    {
        $userProjects = UserProject::where('project_id', $projeto_id)->get();

        $usersData = [];

        foreach ($userProjects as $userProject) {
            $userData = User::find($userProject->user_id);

            if ($userData) {
                $usersData[] = [
                    'user_id' => $userData->id,
                    'name' => $userData->name,
                    'tipo_usuario' => $userData->tipo_usuario,
                ];
            }
        }

        return response()->json($usersData, 200);
    }
}
