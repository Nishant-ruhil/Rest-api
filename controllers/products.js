const getAllProducts = async(req,res)=>{
    res.status(200).json({msg:"YOU acess "});
}
const getAllProductsTesting = async(req,res)=>{
    res.status(200).json({msg:"YOU acess all the getAllProductTesting"});
}

module.exports = {getAllProducts,getAllProductsTesting};
