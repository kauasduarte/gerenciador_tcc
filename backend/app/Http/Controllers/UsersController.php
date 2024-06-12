<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\UserProject;

class UsersController extends Controller
{
    public function register(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->last_name = $request->last_name;
        $user->tipo_usuario = $request->tipo_usuario;
        $user->cpf = $request->cpf;
        $user->birth = $request->birth;
        $user->curso = $request->curso;
        $user->instituicao = $request->instituicao;
        $user->departamento = $request->departamento;
        $user->matricula = $request->matricula;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        $user->save();

        return response()->json([
            'user' => $user,
            'message' => 'User created'
        ], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $user = User::where('email', $request->email)->first();
        $projetosIds = UserProject::where('user_id', $user->id)->value('project_id');

        return response()->json([
            'user' => $user,
            'projeto_id' => $projetosIds,
            'message' => 'User logged in'
        ], 200);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        return response()->json([
            'message' => 'User logged out'
        ], 200);
    }

    public function getUserById($user_id)
    {
        return User::where('id', $user_id)->get();
    }
}
