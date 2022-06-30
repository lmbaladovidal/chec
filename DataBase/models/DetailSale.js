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
    const Detailsale = sequelize.define(alias,cols,config);    
    Detailsale.associate = function (models) {
        Detailsale.belongsTo(models.Sales, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "Sales",
            foreignKey: 'Sales_id',
        })
    }

    return Detailsale
}
