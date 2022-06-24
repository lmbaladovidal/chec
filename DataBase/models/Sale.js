module.exports = (sequelize, dataTypes) => {
    let alias = 'Sale';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        shippingCost: {
            type: dataTypes.DECIMAL(6, 2).UNSIGNED,
            allowNull: false
        },
        discount: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        total: {
            type: dataTypes.DECIMAL(6, 2).UNSIGNED,
            allowNull: false
        },
        Users_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
<<<<<<< HEAD
        timestamps: false,
    }
    const Sale = sequelize.define(alias,cols,config);
    
    Sale.associate = function (models) {
        Sale.hasMany(models.Detailsale, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "Detailsale",
=======
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Sale = sequelize.define(alias,cols,config);    
    Sale.associate = function (models) {
        Sale.hasMany(models.Detailsale, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "detailsale",
>>>>>>> 5fdd17cfef120967057a2b4e16b5eae263bb9d93
            foreignKey: 'Sales_id',
        })
    }
    return Sale
}
