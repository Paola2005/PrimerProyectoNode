const express=require("express");
const router=express.Router();
const {validatorCreateItem,validatorGetItem}=require("../Validators/tracks")
const {getItems,getItem,createItem,updateItem,deleteItem}=require("../controllers/tracks")
const customHeader=require("../middleware/customHeader")

router.get("/",getItems);
router.get("/:id",validatorGetItem, getItem);
router.post("/",validatorCreateItem,customHeader,createItem);
router.put("/:id",validatorCreateItem,validatorGetItem,updateItem);
router.delete("/:id",validatorGetItem, deleteItem);
module.exports=router;