module.exports = (sequelize, dataTypes) => {
    let alias = "Recipes";
    let cols = {
        id:{ type: dataTypes.INTEGER(6).UNSIGNED, primaryKey: true, autoIncrement: true, allowNull:false },
        name: { type: dataTypes.STRING(45), allowNull: false },
        volume: { type: dataTypes.DECIMAL(6,2), allowNull: false },                    
        boilvolume: { type: dataTypes.DECIMAL(6,2), allowNull: false },
        alcohol:  { type: dataTypes.DECIMAL(6,2), allowNull: false },
        targetFG:  {type: dataTypes.DECIMAL(6,2), allowNull: false },             
        targetOG:  { type: dataTypes.DECIMAL(6,2), allowNull: false },
        initialPH: { type: dataTypes.INTEGER(6), allowNull: false },
        finalPH:{ type: dataTypes.INTEGER(6), allowNull: false },
        mashTemp:{ type: dataTypes.DECIMAL(6,2), allowNull: false },
        mashTime:{ type: dataTypes.DECIMAL(6,2), allowNull: false },
        boilTime:{ type: dataTypes.DECIMAL(6,2), allowNull: false },
        fermentationTemp:{ type: dataTypes.STRING(45), allowNull: true },
        malt1: { type: dataTypes.STRING(45), allowNull: false },
        malt1Amount:{ type: dataTypes.DECIMAL(6,2), allowNull: false },
        malt2: { type: dataTypes.STRING(45), allowNull: true },
        malt2Amount: { type: dataTypes.DECIMAL(6,2), allowNull: true },
        malt3: { type: dataTypes.STRING(45), allowNull: true },
        malt3Amount:{ type: dataTypes.DECIMAL(6,2), allowNull: true },
        malt4: { type: dataTypes.STRING(45), allowNull: true },
        malt4Amount: { type: dataTypes.DECIMAL(6,2), allowNull: true },
        malt5: { type: dataTypes.STRING(45), allowNull: true },
        malt5Amount: { type: dataTypes.DECIMAL(6,2), allowNull: true },
        hop1: { type: dataTypes.STRING(45), allowNull: false },
        hop1Amount:{ type: dataTypes.DECIMAL(6,2), allowNull: false },
        hop2: { type: dataTypes.STRING(45), allowNull: true },
        hop2Amount:{ type: dataTypes.DECIMAL(6,2), allowNull: true },
        hop3: { type: dataTypes.STRING(45), allowNull: true },
        hop3Amount: { type: dataTypes.DECIMAL(6,2), allowNull: true },
        yeast: { type: dataTypes.STRING(45), allowNull: false },
        yeastAmount:{ type: dataTypes.DECIMAL(6,2), allowNull: false },
        brewerTip: { type: dataTypes.STRING(500), allowNull: false },
        foodPairing:{ type: dataTypes.STRING(500), allowNull: false }
        
    };
    let config = {
        timestamps: false,
    };

const Recipes = sequelize.define(alias, cols, config);

Recipes.associate = function (models) {
        Recipes.belongsToMany(models.Users, { 
            as: "Users",
            through: "Recipes_users",
            foreignKey: 'users_id',
            otherKey: 'recipes_id',
            timestamps: false
        })
}
return Recipes;
}