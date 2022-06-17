module.exports = (sequelize, dataTypes) => {
    let alias = "users";
    let cols = {
        id:{ 
            type: dataTypes.INTEGER(6).UNSIGNED,
            primaryKey : true,
            autoIncrement: true,
            allowNull:false,
        },
        name: {
            type: dataTypes.STRING(45), 
            allowNull: true,
            default: "valorPorDefecto"
        },
        lastName: {            
            type: dataTypes.STRING(65), 
            allowNull: true,
            default: "valorPorDefecto"
        },
                      
        birthDate: {            
            type: dataTypes.DATE, 
            allowNull: true,
            default: null
        },
        address: {            
            type: dataTypes.STRING(65), 
            allowNull: true,
            default: "valorPorDefecto"
        },
        email: {            
            type: dataTypes.STRING(65), 
            allowNull: true,
            default: "email@"
        },
        userRole: {            
            type: dataTypes.STRING(65), 
            allowNull: true
        },
        avatar: {            
            type: dataTypes.STRING(200), 
            allowNull: true
        },

    };
    let config = {
        timestamps: false,

    };

const Users = sequelize.define(alias, cols, config);
Users.associate =(models)=>{
Users.belongsTo(models.UserRoles,{
    as:"userroles",
    foreignKey:"Users_id"
})
}
 return Users;
}