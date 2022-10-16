// const { builtinModules } = require("module");
const mongoose = require("mongoose");
// const { required } = require("nodemon/lib/config");
//customer model
const Ads = mongoose.model('Ads',{
    
   
    photo:{
        type:String
    },

   

})

module.exports = Ads;