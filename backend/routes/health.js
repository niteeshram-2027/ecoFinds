const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({message:"backend is running fine"});
});

module.exports = router;