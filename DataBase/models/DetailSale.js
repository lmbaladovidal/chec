module.exports = (sequelize, dataTypes) => {
    let alias = 'Detailsale';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: dataTypes.DECIMAL(6, 2).UNSIGNED,
            allowNull: false
        },
        quantity: {
            type: dataTypes.DECIMAL(6, 2).UNSIGNED,
            allowNull: false
        },
        Users_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        Sales_Users_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
<<<<<<< HEAD
    const Detailsale = sequelize.define(alias,cols,config);
    
    Detailsale.associate = function (models) {
        Detailsale.belongsTo(models.Sale, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "sale",
=======
    const Detailsale = sequelize.define(alias,cols,config);    
    Detailsale.associate = function (models) {
        Detailsale.belongsTo(models.Sale, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "Sale",
>>>>>>> 5fdd17cfef120967057a2b4e16b5eae263bb9d93
            foreignKey: 'Sales_id',
        })
    }

    return Detailsale
}
