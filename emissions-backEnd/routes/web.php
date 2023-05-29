<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DatabaseController;
use App\Http\Controllers\ExternalAPIController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
//Temporary route to code proper extraction of gas and county query parameters from the database:
Route::get('formData2',[ExternalAPIController::class, 'queryToEmissionsAPI2']);
/*Route::get('/responseFromEmissionsAPI', function () {
    return view('response');
}); */
// Route::get('emissions',[ExternalAPIController::class, 'queryToEmissionsAPI']);
