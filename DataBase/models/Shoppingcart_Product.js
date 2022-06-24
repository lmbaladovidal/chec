module.exports = (sequelize, dataTypes) => {
    let alias = 'Shoppingcart_products';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        Products_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
        ShoppingCart_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false}
        
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Shoppingcart_products = sequelize.define(alias,cols,config);
    
    
    Shoppingcart_products.associate = function (models) {
        Shoppingcart_products.belongsTo(models.Shoppingcart, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "Shoppingcart",
            foreignKey: 'id_Cart',
        })
    }

    return Shoppingcart_products
}
