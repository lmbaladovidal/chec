const type = [
                {nombre:"Sout",
                descripcion:"Cerveza negra con notas a café y chocolate levemente lupulada y moderada en alcohol.",
                precio:200,
                amargor:15,
                color:32,
                alcohol:7.5,
                cuerpo:"pesado",
                gasificacion:"media",
                lupulo:"Cascade"
            },
                {nombre:"IPA",
                descripcion:"Cerveza rubia amarga con aromas herbales que aportan sus lúpulos cascade y chinok.",
                precio:250,
                amargor:40,
                color:9,
                alcohol:5.2,
                cuerpo:"liviano",
                gasificacion:"media/alta",
                lupulo:"Cascade"
            },
                {nombre:"Golden",
                descripcion:"Cerveza rubia, refrescante fácil y de tomar por su balance y bajo amargor.",
                precio:200,
                amargor:7,
                color:5,
                alcohol:5,
                cuerpo:"liviano",
                gasificacion:"media",
                lupulo:"Cascade"
            },
                {nombre:"Honey",
                descripcion:"Cerveza rubia de alto dulzor con notas de sabor a miel.",
                precio:200,
                amargor:7,
                color:5,
                alcohol:5,
                cuerpo:"liviano",
                gasificacion:"media",
                lupulo:"Cascade"
            },
                {nombre:"Irish Red Ale",
                descripcion:"Cerveza roja acaramelada con notas maltosas y bajo amargor.",
                precio:200,
                amargor:10,
                color:26,
                alcohol:6.5,
                cuerpo:"moderado",
                gasificacion:"media/baja",
                lupulo:"Cascade"}
]

const productControler = {
    productPage:(req,res)=>{res.render('./product/productPage',{type:type})},
    productCart:(req,res)=>{res.render('./product/productCart')},
    productDetail:(req,res)=>{res.render('./product/productDetail',type[req.params.id])},
    productPack:(req,res)=>{res.render('./product/pack')}
}

module.exports=productControler;