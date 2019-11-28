//key.js 
if (process.env.NODE_ENV ==='production'){
// we are production 
module.exports=require('./prod');

}else{
//return dev key 
module.exports=require('./dev');

}