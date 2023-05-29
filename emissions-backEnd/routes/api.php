<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DatabaseController;
use App\Http\Controllers\ExternalAPIController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//API calls supposed to be made by the front-end Angular app:
//Get the list of gases from the database:
Route::get('gases',[DatabaseController::class,'getGases']);
//Get the list of countries from the database:
Route::get('countries',[DatabaseController::class,'onlyCountries']);
Route::post('formData',[ExternalAPIController::class, 'queryToEmissionsAPI']);