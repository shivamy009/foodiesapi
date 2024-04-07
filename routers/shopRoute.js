const express = require('express');
const { requireSignin, isadmin } = require('../middleware/authMiddleware');
const { createShop, updateShop, getAllshop, getSingleshop, deleteshop } = require('../controllers/shopController');
const router= express.Router();
// create shop

router.post('/createshop',requireSignin,isadmin,createShop)
// update shop
router.put('/updateshop/:id',requireSignin,isadmin,updateShop)
// get all shop
router.get('/getallshop',getAllshop)
// get single shop
router.get('/getsingleshop/:id',getSingleshop)
// delete shop
router.delete('/deleteshop/:id',requireSignin,isadmin,deleteshop)

module.exports=router;