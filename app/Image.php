<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{

    protected $fillable = [
        'user_id','name', 'comment', 'url',
    ];
    //

    protected $casts = [
        'created_at' => 'datetime',
    ];

    public function owner(){
        $this->belongsTo('App\User');
    }
}
