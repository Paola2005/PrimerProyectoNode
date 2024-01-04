const express=require("express");
const router=express.Router();
const {validatorCreateItem}=require("../Validators/tracks")
const {getItems,getItem,createItem}=require("../controllers/tracks")
const customHeader=require("../middleware/customHeader")
router.get("/",getItems);
router.get("/:id",getItem);
router.post("/",validatorCreateItem,customHeader,createItem);

module.exports=router;