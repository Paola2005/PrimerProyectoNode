const { trackModel } = require('../models');
const {matcheData}=require("express-validator");
const {handleHttpError}=require("../utils/handleError")
/** 
 * obtener lista de la base de datos
 * @param{*}req
 * @param{*}res 
 */
const getItems = async (req, res) => {
    try{
        const data = await trackModel.find({});
        res.send({data});
    }catch(e){
        handleHttpError(res, "Erros_Get_Items");
    }

};

/** 
 * obtener un detalle
 * @param{*}req
 * @param{*}res 
 */ 
const getItem = (req, res) => { };

/** 
 * Insertar un resgistro
 * @param{*}req
 * @param{*}res 
 */
const createItem = async (req, res) => {
    try{
        const body=matcheData(req)
        const data=await trackModel.create(body);
        res.send({data});
    }catch(e){
        handleHttpError(res, "Erros_Create_Items");
    }



 };
 
/** 
 * Actualizar un registro
 * @param{*}req
 * @param{*}res 
 */
const updateItem = (req, res) => { };

/** 
 * Eliminar un registro
 * @param{*}req
 * @param{*}res 
 */
const deleteItem = (req, res) => { };

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };