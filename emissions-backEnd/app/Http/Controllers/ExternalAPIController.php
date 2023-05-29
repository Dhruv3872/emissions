<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\DB;
class ExternalAPIController extends Controller
{
    private $averageApiUrlPartOne = "https://api.v2.emissions-api.org/api/v2/";
    private $averageApiUrlPartThree = "/average.json";
    public function queryToEmissionsAPI(Request $req){
        // return "Hi from the back-end..";
        // return redirect('responseFromEmissionsAPI');
        // echo $req;
        // return $req;
        // echo $req;
        $gasName = $req->gasName;
        // return $gasName;
        $countryName = $req->countryName;
        $startDate = $req->startDate;
        $endDate = $req->endDate;
        $values = array($gasName,$countryName,$startDate,$endDate);
        // echo json_encode($values);
        // echo $values;
        
        $gasQueryParameter = DB::select("SELECT query_parameter FROM gases WHERE Name='$gasName'")[0] -> query_parameter;
        $countryQueryParameter = DB::select("SELECT country_code FROM countries WHERE country_name='$countryName'")[0] -> country_code;
        // return $gasQueryParameter;
        // return (json_encode($countryQueryParameter));
        // return $this->averageApiUrlPartOne;
        $requestToEmissionsAPI = $this->averageApiUrlPartOne . $gasQueryParameter . 
        $this->averageApiUrlPartThree . 
        "?country=" . $countryQueryParameter . 
        "&begin=" . $startDate . 
        "&end=" . $endDate;
        // return (json_encode($requestToEmissionsAPI));
        // return array($requestToEmissionsAPI);
        // return $gasName + " " + $countryName + " " + $startDate + " " + $endDate;

        // return Http::get('https://api.v2.emissions-api.org/api/v2/methane/average.json?country=IND&begin=2023-01-01&end=2023-01-05');
        $response = Http::get($requestToEmissionsAPI);
        return $response;
        // return view('response', $response);
    }
    //Temporary method to code proper extraction of gas and county query parameters from the database:
    public function queryToEmissionsAPI2(){
        $gasQueryParameter = DB::select("SELECT query_parameter FROM gases WHERE Name='Methane'")[0] -> query_parameter;//query_parameter';
        $countryQueryParameter = DB::select("SELECT country_code FROM countries WHERE country_name='India'")[0] -> country_code;
        // echo $gasQueryParameter + $countryQueryParameter;
        return $gasQueryParameter;
        //$gasQueryParameter;// + " " + 
    }
}
