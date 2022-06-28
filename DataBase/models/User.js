module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id:{ 
            type: dataTypes.INTEGER(6).UNSIGNED,
            primaryKey : true,
            autoIncrement: true,
            allowNull:false,
        },
        name: {
            type: dataTypes.STRING(45), 
            allowNull: false,
         
        },
        lastName: {            
            type: dataTypes.STRING(45), 
            allowNull: false,
           
        },
                      
        birthDate: {            
            type: dataTypes.DATE, 
            allowNull: false,
            
        },
        address: {            
            type: dataTypes.STRING(65), 
            allowNull: false,
           
        },
        email: {            
            type: dataTypes.STRING(65), 
            allowNull: false,
        },
             
        avatar: {            
            type: dataTypes.STRING(200), 
            allowNull: false,
            default:'images/avatar/default_img.png'
        },

<<<<<<< HEAD
        userroles_id: {
            type: dataTypes.INTEGER(6),
            allowNull: true, 
            
        },
=======
        
>>>>>>> 4b5eda3c50553e7dcef22766d185965b57c57e84
        password: {
            type: dataTypes.STRING(250), 
            allowNull: false,

        },
        userroles_id: {
            type: dataTypes.INTEGER(6),
            allowNull: true, 
            default: 1
            
        },
        recipes_users_id: {
            type: dataTypes.INTEGER(6),
            allowNull: true, 
            default: null
        }
        
    };
    let config = {
        timestamps: false,

    };

const Users = sequelize.define(alias, cols, config);

Users.associate =(models)=>{
<<<<<<< HEAD
Users.belongsTo(models.UserRoles,{
    as:"UserRoles",
    foreignKey:"userroles_id"
})
=======
    Users.belongsTo(models.UserRoles,{
        as:"UserRoles",
        foreignKey:"userroles_id"
    })

    Users.belongsToMany(models.Recipes, { 
        as: "Recipes",
        through: "Recipes_users",
        foreignKey: 'recipes_id',
        otherKey: 'users_id',
        timestamps: false
    })
   
>>>>>>> 4b5eda3c50553e7dcef22766d185965b57c57e84
}
 return Users;
}