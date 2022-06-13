module.exports = (sequelize, dataTypes) => {
    let alias = "UserRoles";
    let cols = {
        id:{ types: dataTypes.INT(4).UNSIGNED,
            primaryKey : true,
            autoIncrement: true,
            allowNull:false,
        },
        roleName: {
            types: dataTypes.STRING(45), 
            allowNull: false
        },
        
    };
    let config = {
        timestamps: false,

    };

const UserRoles = sequelize.define(alias, cols, config);

UserRoles.associate= (models) =>{
    UserRoles.hasMany(models.Users,{
        as:"users",
        foreignKey:"UserRoles_id" //aca va la aclaracion de la FK que tiene la otra tabla conectandola con esta
    })
}
}