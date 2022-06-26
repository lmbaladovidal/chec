module.exports = (sequelize, dataTypes) => {
    let alias = 'Recipes_users';
    let cols = {
        id: {
            type: dataTypes.INTEGER(6).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        recipes_id: {
            type: dataTypes.INTEGER(6).UNSIGNED,
            allowNull: false
        },
        users_id: {
            type: dataTypes.INTEGER(6).UNSIGNED,
            allowNull: false}
        
    };
    let config = {
        timestamps: false,
    }
    const Recipes_users = sequelize.define(alias,cols,config);
    
    
    Recipes_users.associate = function (models) {
        Recipes_users.belongsTo(models.Recipes, { 
            as: "Recipes",
            foreignKey: '...',
        })

        
    }

    return Recipes_users
}
