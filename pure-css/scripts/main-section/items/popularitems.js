 const data = { "products": [
    {
        "id": 1,
        "name": "Almond Toe Court Shoes, Patent Black",
        "category": "Womens Footwear",
        "price": 99.00,
        "stock": "available",
        "img": "https://dxs8u2q9547g0.cloudfront.net/sys-master/products/h29/had/8817080795166/126339801_Black_01.jpg_LARGE",
        "sizes": "34, 36, 38, 42"
    },
    {
        "id": 2,
        "name": "Suede Shoes, Blue",
        "category": "Womens Footwear",
        "price": 42.00,
        "stock": "available",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwUqKq0V7XTFo7sR5JsIr2nM6zSuFqLeAV1cTovnG8GCv5QE_Ssm1ubckjpW_kIa63XyaCaLtevw&usqp=CAc",
        "sizes": "38, 40, 42, 44"
    },
    {
        "id": 3,
        "name": "Leather Driver Saddle Loafers, Tan",
        "category": "Mens Footwear",
        "price": 34.00,
        "stock": "unavailable",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsj6ogHjtiY7ajzqYPyO9XCuqmjli774KljUf4NtZjWyoToUurgo6ASdR8pZXFxf8m9s3g7i9wQ&usqp=CAc",
        "sizes": "40, 42"
    },
    {
        "id": 4,
        "name": "Flip Flops, Red",
        "category": "Mens Footwear",
        "price": 19.00,
        "stock": "available",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDwvt4Yum9RrGwYRwGWX-Q6UKUCG_Fad7ptiqnLtSAlXkSNpJz2hwZsLRhlm8pqaZ0sQKKGQ&usqp=CAc",
        "sizes": "34, 36, 38, 40, 42"
    },
    {
        "id": 5,
        "name": "Flip Flops, Blue",
        "category": "Mens Footwear",
        "price": 19.00,
        "stock": "available",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6v-VnR_bzwf8TfBwGJjrjzPvuXsejs3Kyp73tlI7IYe1hlcD46MHp0R9bPyd79HGpZQ-xwB0&usqp=CAc",
        "sizes": "34, 36, 38, 40, 42"
    },
    {
        "id": 6,
        "name": "Gold Button Cardigan, Black",
        "category": "Womens Casualwear",
        "price": 167.00,
        "stock": "unavailable",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtvmdxUSV7dO7h1WOLzZhJ09j2vudlbRhOdZf0bThSVnWq0p2RvwpcPK4AHHJRep1gnkgKHkc&usqp=CAc",
        "sizes": "XS, S, M, L, XL, XXL"
    },
    {
        "id": 7,
        "name": "Cotton Shorts, Medium Blue",
        "category": "Womens Casualwear",
        "price": 30.00,
        "stock": "available",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ppni2LRJEtfc56Du7qCiI08ZYsoVg7F7FF8vxuUvhKg6ge6UM7dE5-btD8XxLfqfLP_hGqq80A&usqp=CAc",
        "sizes": "M, L, XL"
    },
    {
        "id": 8,
        "name": "Fine Stripe Short Sleeve Shirt, Grey",
        "category": "Mens Casualwear",
        "price": 49.99,
        "stock": "available",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS29AC0mTdM2KSpgboJI5VBXxN4tcuaKp2UQ&usqp=CAU",
        "sizes": "S, M, L, XL"
    },
    {
        "id": 9,
        "name": "Fine Stripe Short Sleeve Shirt, Green",
        "category": "Mens Casualwear",
        "price": 49.99,
        "offer": 39.99,
        "stock": "available",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnXSixlfNP9FXbx3iIruUBvr8cjL_c_1axyrl_iEyF3gTz3yw0SnYOFNOXi8HU6DXZtPWjdh6Hg&usqp=CAc",
        "sizes": "S, M"
    },
    {
        "id": 10,
        "name": "Sharkskin Waistcoat, Charcoal",
        "category": "Mens Formalwear",
        "price": 75.00,
        "stock": "available",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLp5KSS4DKmtKT-t7kNt4kprcSw9xaHneSKPgHTqo9gMrnf9ZTLguRjabRmbAa07RiBENxWpA&usqp=CAc",
        "sizes": "M, L, Xl"
    },
    {
        "id": 11,
        "name": "Lightweight Patch Pocket Blazer, Deer",
        "category": "Mens Formalwear",
        "price": 175.50,
        "stock": "unavailable",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwG3Wj3LTnSwguNyNZS30QwMEywrMyGipRYkupZqXf39Y_NGKcvFkuNxnT3JAknwHMDNdqYqs&usqp=CAc",
        "sizes": "XS, S, M, L"
    },
    {
        "id": 12,
        "name": "Bird Print Dress, Black",
        "category": "Womens Formalwear",
        "price": 270.00,
        "stock": "available",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVubcGnJiILpqc0Ap9xpeC07HbIJLRwAiSFUIaduFhu1h7UVRnHd_QnEGOuuu9ChwRNyzC3U&usqp=CAc",
        "sizes": "S, M"
    },
    {
        "id": 13,
        "name": "Mid Twist Cut-Out Dress, Pink",
        "category": "Womens Formalwear",
        "price": 540.00,
        "stock": "available",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUUCgcqnuHdnI7hoTJTqI4WtonsJr8OMeRA&usqp=CAU",
        "sizes": "S, M, L, XL"
    }
    ]
}

export default data;