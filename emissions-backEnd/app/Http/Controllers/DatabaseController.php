<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DatabaseController extends Controller
{
    function allCountries(){
        return DB::select('SELECT * FROM countries');
    }
    function onlyCountries(){
        /*Since the table contains entries of countries for both 2-character and 3-character
         versions of country-codes, we need to put a condition to include countries from 
         the entries having only 3-characters as their country codes, since we want to
         return an array with no duplication.  
        */
        return DB::select('SELECT * FROM countries WHERE LENGTH(country_code) = 3');
    }
    function getGases(){
        return DB::select('SELECT * FROM gases');
    }
}
