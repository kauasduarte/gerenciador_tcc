<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UsersController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'tipo_usuario' => 'required|string|in:aluno,orientador,banca,coordenador',
            'cpf' => 'required|string|unique:users',
            'birth' => 'required|date',
            'curso' => 'required|string|max:255',
            'instituicao' => 'required|string|max:255',
            'departamento' => 'required|string|max:255',
            'matricula' => 'required|string|unique:users',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::create([
            'name' => $request->name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'tipo_usuario' => $request->tipo_usuario,
            'cpf' => $request->cpf,
            'birth' => $request->birth,
            'curso' => $request->curso,
            'instituicao' => $request->instituicao,
            'departamento' => $request->departamento,
            'matricula' => $request->matricula,
        ]);

        return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return response()->json(['message' => 'Login successful', 'user' => $user], 200);
        }

        return response()->json(['message' => 'Invalid email or password'], 401);
    }
}
