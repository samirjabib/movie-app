const { DataTypes } = require("sequelize");
const { db } = require("../../utils/database");
const { Users } = require("./user.model");

const Reviews = db.define("reviews",{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        allowNull:false
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mediaType:{
        type:DataTypes.ENUM(
            "tv", "movies"
        ),
        allowNull:false,
    },
    mediaId:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mediaTitle:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mediaPoster:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userId:{
        type:DataTypes.UUID,
        allowNull:false,
        field:'user_id',
        references:{
            key:'id',
            model:Users
        }
    }
    
})  


module.exports = { Reviews }