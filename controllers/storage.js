const { storageModel } = require('../models')
const PUBLIC_URL=process.env.PUBLIC_URL;
/** 
 * obtener lista de la base de datos
 * @param{*}req
 * @param{*}res 
 */
const getItems = async (req, res) => {
    const data = await storageModel.find({});
    res.send({ data });
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
    const {body,file}=req
    console.log(file)
    const filedata={
        filename:file.filename,
        url:`${PUBLIC_URL}/${file.filename}`
    }
/*     console.log(body) */
     const data=await storageModel.create(filedata)
    res.send({data})
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