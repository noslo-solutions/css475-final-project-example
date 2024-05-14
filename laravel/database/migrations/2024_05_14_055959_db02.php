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
        Schema::create('meetings', function (Blueprint $table) {
            $table->id();
            $table->dateTime('startTime');
            $table->string('purpose');
            $table->foreignId('room_id');
            $table->foreignId('creator_id');
            $table->foreignId('moderator_id')->nullable();
            $table->timestamps();
        });

        \Illuminate\Support\Facades\DB::statement("ALTER TABLE meetings ADD COLUMN duration INTERVAL");

        Schema::create('attendees', function (Blueprint $table) {
            $table->foreignId('meeting_id');
            $table->foreignId('user_id');
            $table->primary(['meeting_id', 'user_id']);
        });

        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->string('building');
            $table->string('room');
            $table->integer('capacity')->nullable();
        });


        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });


        Schema::create('phones', function (Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->foreignId('user_id');
            $table->string('phone_type_id');
        });
        Schema::create('phone_types', function (Blueprint $table) {
            $table->string('id');
            $table->string('name');
            $table->primary('id');
        });


        Schema::table('users', function (Blueprint $table) {
            $table->string('password')->nullable()->change();
            $table->string('department_id')->nullable();
            $table->string('employeeNum')->nullable();
            $table->decimal('salary')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('meetings');
        Schema::dropIfExists('attendees');
        Schema::dropIfExists('departments');
        Schema::dropIfExists('phones');
        Schema::dropIfExists('phone_types');
        Schema::dropIfExists('rooms');

        Schema::table('users', function (Blueprint $table) {
//            $table->string('password')->nullable()->change();
            $table->dropColumn('department_id');
            $table->dropColumn('employeeNum');
            $table->dropColumn('salary');
        });
    }
};
