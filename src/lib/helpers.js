const bcript = require('bcryptjs');
const helpers = {};

helpers.encryptPassword = async (password)=>{
    const salt = await bcript.genSalt(10);
    const hash = await bcript.hash(password, salt);
    return hash;

};

helpers.matchPassword = async (password, savePassword)=>{
   try {
      return await bcript.compare(password, savePassword);
   } catch (error) {
    console.log(error); 
   }
}

module.exports = helpers;