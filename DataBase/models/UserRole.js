module.exports = (sequelize, dataTypes) => {
    let alias = "UserRoles";
    let cols = {
        id:{ 
            type: dataTypes.INTEGER(6).UNSIGNED,
            primaryKey : true,
            autoIncrement: true,
            allowNull:false,
        },
        roleName: {
            type: dataTypes.STRING(45), 
            allowNull: false,
            default: "user"
        },
        
    };
    let config = {
        timestamps: false,

    };

const UserRoles = sequelize.define(alias, cols, config);

// UserRoles.associate= (models) =>{
//     UserRoles.hasMany(models.Users,{
//         as:"users",
//         foreignKey:"userroles_id" //aca va la aclaracion de la FK que tiene la otra tabla conectandola con esta
//     })
// }
// return UserRoles;

}