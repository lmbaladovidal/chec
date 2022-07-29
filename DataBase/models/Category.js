module.exports = (sequelize, dataTypes) => {
    let alias = "Categories";
    let cols = {
        id:{ 
            type: dataTypes.INTEGER(6).UNSIGNED,
            primaryKey : true,
            autoIncrement: true,
            allowNull:false,
        },
        description: {
            type: dataTypes.STRING(65), 
            allowNull: false,
            default: "Estandar"
        },
        
    };
    let config = {
        timestamps: false,

    };

const Categories = sequelize.define(alias, cols, config);

// UserRoles.associate= (models) =>{
//     UserRoles.hasMany(models.Users,{
//         as:"Users",  // tiene que ser el alias de la base Users
//         foreignKey:"users_roles_id" //aca va la aclaracion de la FK que tiene la otra tabla conectandola con esta
//     })
// }
return Categories;

}