module.exports = (sequelize, dataTypes) => {
    let alias = 'Shoppingcart';
    let cols = {
        id_Cart: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(6, 2).UNSIGNED,
            allowNull: false
        },
        discount: {
            type: dataTypes.DECIMAL(6, 2).UNSIGNED,
            allowNull: false
        },
        shippingCost: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        total: {
            type: dataTypes.DECIMAL(6, 2).UNSIGNED,
            allowNull: false
        },
        sold: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        Users_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        state: {
            type: dataTypes.BIGINT(1).UNSIGNED,
            allowNull: false
        }
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Shoppingcart = sequelize.define(alias,cols,config);
    
    Shoppingcart.associate = function (models) {
        Shoppingcart.hasMany(models.Shoppingcart_products, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "Shoppingcart_products",
            foreignKey: 'id_Cart',
        })
    }

    return Shoppingcart
}