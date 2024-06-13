<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserProject;

class UserProjectSeeder extends Seeder
{
    public function run(): void
    {
        UserProject::createOrFirst([
            "user_id" => 1,
            "project_id" => 1,
        ]);

        UserProject::createOrFirst([
            "user_id" => 2,
            "project_id" => 1,
        ]);

        UserProject::createOrFirst([
            "user_id" => 3,
            "project_id" => 1,
        ]);

        UserProject::createOrFirst([
            "user_id" => 5,
            "project_id" => 1,
        ]);

        UserProject::createOrFirst([
            "user_id" => 7,
            "project_id" => 1,
        ]);

        UserProject::createOrFirst([
            "user_id" => 2,
            "project_id" => 2,
        ]);

        UserProject::createOrFirst([
            "user_id" => 4,
            "project_id" => 2,
        ]);

        UserProject::createOrFirst([
            "user_id" => 6,
            "project_id" => 2,
        ]);

        UserProject::createOrFirst([
            "user_id" => 8,
            "project_id" => 2,
        ]);

        UserProject::createOrFirst([
            "user_id" => 1,
            "project_id" => 3,
        ]);

        UserProject::createOrFirst([
            "user_id" => 3,
            "project_id" => 3,
        ]);

        UserProject::createOrFirst([
            "user_id" => 5,
            "project_id" => 3,
        ]);

        UserProject::createOrFirst([
            "user_id" => 7,
            "project_id" => 3,
        ]);

        UserProject::createOrFirst([
            "user_id" => 8,
            "project_id" => 3,
        ]);
    }
}
