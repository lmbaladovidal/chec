module.exports = (sequelize, dataTypes) => {
    let alias = 'Sales';
    let cols = {
        id: {
            type: dataTypes.INTEGER(6).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        shippingCost: {
            type: dataTypes.DECIMAL(6, 2).UNSIGNED,
        },
        discount: {
            type: dataTypes.INTEGER(6).UNSIGNED,
        },
        total: {
            type: dataTypes.DECIMAL(6, 2).UNSIGNED,
        },
        state: {
            type: dataTypes.INTEGER(6),
            allowNull: false
        },
        users_id: {
            type: dataTypes.INTEGER(6).UNSIGNED,
            allowNull: false
        }
        
    };
    let config = {
        timestamps: false,
    }
    const Sale = sequelize.define(alias,cols,config);
    
    Sale.associate = function (models) {
        Sale.hasMany(models.Detailsales, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "Detailsales",
            foreignKey: 'Sales_id',
        })

    }
    return Sale
}
