const { db } = require("../../utils/database");

const { DataTypes } = require("sequelize")


const Users = db.define("users", {
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        allowNull:false
    },
    displayName:{
        type:DataTypes.STRING,
        allowNull:false,
        field: "display_name",
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'normal'
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'active'
    }
})

module.exports = { Users }