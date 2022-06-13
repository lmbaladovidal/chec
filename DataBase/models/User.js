module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id:{ types: dataTypes.INT(4).UNSIGNED,
            primaryKey : true,
            autoIncrement: true,
            allowNull:false,
        },
        name: {
            types: dataTypes.STRING(45), 
            allowNull: false
        },
        lastName: {            
            types: dataTypes.STRING(65), 
            allowNull: false
        },
                      
        dateOfBirth: {            
            types: dataTypes.DATEONLY, 
            allowNull: false,
        },
        address: {            
            types: dataTypes.STRING(65), 
            allowNull: false
        },
        email: {            
            types: dataTypes.STRING(65), 
            allowNull: false
        },
        userRole: {            
            types: dataTypes.STRING(65), 
            allowNull: false
        },
        userImage: {            
            types: dataTypes.STRING(200), 
            allowNull: false
        },

    };
    let config = {
        timestamps: false,

    };

const Users = sequelize.define(alias, cols, config);
Movie.associate =( models)=>{
Users.belongsTo(models.UserRoles,{
    as:"userroles",
    foreignKey:"Users_id"
})
}

}