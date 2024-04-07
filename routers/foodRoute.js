const express = require('express');
const { createFood, getAllfood, getsinglefood, updateFood, deleteFood, filterFood } = require('../controllers/foodController');
const { requireSignin, isadmin } = require('../middleware/authMiddleware');
const router= express.Router();

// create food

router.post('/createfood',requireSignin,isadmin,createFood)
// get all food

router.get('/getallfood',getAllfood)

// get single food
router.get('/getsinglefood/:id',getsinglefood)

// update food

router.put('/updatefood/:id',requireSignin,isadmin,updateFood)

// delete product

router.delete('/deletefood/:id',requireSignin,isadmin,deleteFood)


//filter product

router.post('/food-filter',filterFood)


module.exports=router;