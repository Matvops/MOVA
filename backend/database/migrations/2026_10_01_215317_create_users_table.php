<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id('usr_id');
            $table->foreignId('usr_profile_id')
                    ->references('pro_id')
                    ->on('profiles');
            $table->string('usr_name', 100);
            $table->string('usr_email')->unique();
            $table->timestamp('usr_email_verified_at')->nullable();
            $table->string('usr_password');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
