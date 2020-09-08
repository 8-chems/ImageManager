<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\User;
use Intervention\Image\ImageManagerStatic as Image;
use App\Image as ImageTable;
//use Exception;
use Illuminate\Support\Facades\Auth;
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


Route::middleware('auth:sanctum')->get('/profile', function (Request $request) {
    
    $user = Auth::user();
    $response = [
        'user' => $user
    ];

    return response($response, 200);
});


Route::middleware('auth:sanctum')->get('/images', function (Request $request) {
    
    $images= DB::table('images')->select('id')
            ->where('user_id', '=', Auth::id())->get();//->toArray();
    
//    $images=Response::json($images);
   // return response($images, 200);

    return response()->json([
        'ids' => $images],200);
});


Route::middleware('auth:sanctum')->post('/imageData', function (Request $request) {
    
    $imageId=$request->id;
    $image= DB::table('images')
            ->where([['user_id', '=', Auth::id()],
                    ['id','=',$imageId]])->first();
    
   
    return response()->json([
           'image'=> $image], 200);


});


Route::middleware('auth:sanctum')->post('/updateComment', function (Request $request) {
    $imageID= $request->id;
    $comment=$request->comment;
$table = DB::table('images')
              ->where('id', $imageID)
              ->update(['comment' => $comment]);

              return response()->json(['status' => 'success'], 200);             
});



Route::middleware('auth:sanctum')->post('/updateName', function (Request $request) {
    $imageID= $request->id;
    $name=$request->name;
    $table = DB::table('images')
              ->where('id', $imageID)
              ->update(['name' => $name]);
              return response()->json(['status' => 'success'], 200);

});


Route::middleware('auth:sanctum')->post('/updateProfile', function (Request $request) {
    

    $user = User::where('email', $request->email)->first();
    if($user){

    $table = DB::table('users')
              ->where('id','=', $user->id)
              ->update([
              'name' => $request->name,
              'pronoun' => $request->pronoun,
              'email' => $request->nemail,
              'Avatar' => $request->avatar,
              'password' => bcrypt($request->npassword)
              ]);
              return response()->json(['status' => 'success'], 200);
    }else{
        return response()->json(['error' => 'Something is wrong'], 555);
    }
});


Route::middleware('auth:sanctum')->post('/deleteImage', function (Request $request) {
    $imageID= $request->id;
    $table = DB::table('images')->where('id', '=', $imageID)->delete();

    return response()->json(['status' => 'success'], 200);

});



Route::post('/login', function (Request $request) {

   $data = $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        return response([
            'message' => ['These credentials do not match our records.']
        ], 404);
    }

    $token = $user->createToken('my-app-token')->plainTextToken;

    $response = [
        'user' => $user,
        'token' => $token
    ];

    return response($response, 201);
});


Route::middleware('auth:sanctum')->post('/upload', function (Request $request) {
    $validator = Validator::make($request->all(), [
        'image' => 'required|image64:jpeg,jpg,png',
        'name' => 'required',
       // 'comment' => 'required',
    ]);
    if ($validator->fails()) {
        return response()->json([
            'status' => 'error',
            'errors'=>$validator->errors()],544);
    } else {

        $imageData = $request->image;
        $fileName = $request->name.'.png';//'chamsi.png';//Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
        Image::make($request->image)->save('../images/'.$fileName);
      //$request->file('image')->store('images');

        try {
        $image = new ImageTable;

        $image->user_id = Auth::id();

        $image->name = $request->name;

        $image->comment = 'hello';
        $image->url = 'http://127.0.0.1:8000/api/images/'.$fileName;
        $image->save();   
        return response()->json(['status' => 'success'], 200);
    
            
    } catch (Throwable $e) {
        return response()->json([
            'status' => 'failed',
            'error' => $e->getMessage()
        ],555);
        
    }

    }
});


//middleware('auth:sanctum')->
Route::get('/images/{filename}', function($filename){
    $path = '../images/' . $filename;

    if(!File::exists($path)) {
        return response()->json(['message' => 'Image is dancing.'], 404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
});


Route::post('/register', function (Request $request) {

    $data = Validator::make($request->all(), [
         'name' => 'required',
         'pronoun' => 'required',
         'email' => 'required|email|unique:users',
         'cemail' => 'required|email',
         'password' => 'required',
        ]);
 
       



        if ($data->fails())
        {
            return response()->json([
                'status' => 'error',
                'errors' => $data->errors()
            ], 422);
        }
        

        if(true){//($email && $cemail){
    
        $user = new User;
        $user->name = $request->name;
        $user->pronoun = $request->pronoun;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
       
      
        $user->save();       
        return response()->json(['status' => 'success'], 200);
        return response()->json(['status' => 'success'], 200);
    }else{
        return response()->json([
            'status' => 'error',
            'errors' => 'Email adress should be checked'
        ], 412);
    }
 });