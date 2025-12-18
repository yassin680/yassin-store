

<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/hello', function () {
    return response()->json(['message' => 'Salam, Laravel backend is working!']);
});

Route::get('/products', function () {
    return response()->json([
        [
            'id' => 1,
            'name' => 'Azzaro Wanted Alternative',
            'price' => 150,
            'image' => '/images/azzaro.jpg'
        ],
        [
            'id' => 2,
            'name' => 'Jean Paul Gaultier Le Beau Alternative',
            'price' => 180,
            'image' => '/images/lebeau.jpg'
        ]
    ]);
});


// --- Login Route ---
Route::post('/login', function (Request $request) {
   
    $credentials = $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);


    if (Auth::attempt($credentials)) {
        $user = Auth::user();

        $token = $user->createToken('auth_token')->plainTextToken;
        
        return response()->json([
            'message' => 'مرحباً بك!',
            'user' => $user,
            'token' => $token
        ]);
    }

    return response()->json([
        'message' => 'Email أو Mot de passe خاطئ'
    ], 401);
});