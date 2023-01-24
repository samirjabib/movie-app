const { DataTypes } = require("sequelize");
const { db } = require("../../utils/database");

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
    }
    
})  


module.exports = { Reviews }