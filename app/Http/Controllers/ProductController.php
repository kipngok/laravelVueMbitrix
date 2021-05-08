<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

         $products = Product::all()->toArray();

        return array_reverse($products);   
       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function store(Request $request)
    // {
    //     //

    //        $product = new Product([
    //         'name' => $request->input('name'),
    //         'detail' => $request->input('detail')
    //     ]);
    //     $product->save();

    //     return response()->json('Product created!');
    // }

public function store(Request $request)
    {
$this->validate($request,[
            'name' => 'required|string',
            'detail' => 'required|string',
        ]);

        $product = new Product();
        $product->name = $request->name;
        $product->detail = $request->detail;
        
        $product->save();

        return response()->json(['result'=>$product]);



        // $product = new Product([
        //     'name' => $request->input('name'),
        //     'detail' => $request->input('detail')
        // ]);
        // $product->save();

        // return response()->json('Product created!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
          return response()->json($product);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //

        $product->update($request->all());

        return response()->json('Product updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
