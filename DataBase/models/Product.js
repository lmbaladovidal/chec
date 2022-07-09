module.exports = 
    (sequelize,DataTypes)=>{
        let alias = "Product"
        let columns = {
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            name:{type:DataTypes.STRING},
            description:{type:DataTypes.STRING},
            price:{type:DataTypes.DECIMAL(6,2)},
            bitterness:{type:DataTypes.INTEGER},
            color:{type:DataTypes.INTEGER},
            alcohol:{type:DataTypes.DECIMAL(6,2)},
            body:{type:DataTypes.STRING},
            carbonation:{type:DataTypes.STRING},
            hop:{type:DataTypes.STRING},
            image:{type:DataTypes.STRING},
            category:{type:DataTypes.STRING},
            stock:{type:DataTypes.INTEGER},
            discount:{type:DataTypes.INTEGER}
        }
        let config ={
            timestamps: false
        }
        const Product = sequelize.define(alias,columns,config);
        Product.associate = (models)=>{
       //     console.log(models)
            Product.hasMany(models.Detailsales,{
                as:"Detailsales",
                foreignKey:"product_id",
                timestamps: false
            })
            
        }
        
        
        return Product
    }
