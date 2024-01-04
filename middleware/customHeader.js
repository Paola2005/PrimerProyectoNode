const customHeader=(req, res, next)=>{
    try{
        const apikey=req.header.api_key;
        if(apikey=='paola'){
            next();
        }
        else{
            res.status(403);
            res.send({error:"apikey incorrecta"});
        }
    }catch(e){
        res.status(403);
        res.send({error:"Algo paso en el customHeader"});
    }
}
module.exports=customHeader