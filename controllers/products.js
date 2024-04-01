const product = require('../models/product');

const getAllProducts = async(req,res)=>{
    const {company,name,sort,select} = req.query;
    const queryobject = {};

    if(company){
        queryobject.company = company;
    }
    if(name){
        queryobject.name = {$regex : name, $options: "i"};
    }

    const apiData =  product.find(queryobject);

    if(sort){
        let sortfix = sort.replace(","," ");
        apiData.sort(sortfix);
    }
    if(select){
        // let selectfix = select.replace(","," ");
        let selectfix = select.split(",").join(" ");
        apiData.select(selectfix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;

    let skip = (page-1) * limit;

    apiData.skip(skip).limit(limit);

    const mydata = await apiData;
    res.status(200).json({mydata});
}
const getAllProductsTesting = async(req,res)=>{
    res.status(200).json({msg:"YOU acess all the getAllProductTesting"});
}

module.exports = {getAllProducts,getAllProductsTesting};
