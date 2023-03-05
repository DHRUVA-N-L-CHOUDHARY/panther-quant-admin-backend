const router = require("express").Router();

const strategies = require("../models/strategies");

router.get("/", async(req,res) =>{
    try{
        const stratergy = await strategies.find();
        res.status(200).json(stratergy); 
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});
module.exports = router;