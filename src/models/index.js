const EmailCode = require("./EmailCode");
const User = require("./User");

//EmailCode -> userId
EmailCode.belongsTo(User) //userId
User.hasMany(EmailCode)