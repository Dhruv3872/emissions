<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class country extends Model
{
    use HasFactory;
    protected $table = 'countries';
    //In our case, primary key is non-incremental. To declare that,
    public $incrementing = false;
    /* Laravel will search for 'updated_at' field if the following line is removed.
    For our application, this field is not required, so we have to inform so to 
    Laravel. */
    public $timestamps = false;
}
