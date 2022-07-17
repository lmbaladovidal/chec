window.onload = () => {
    const formRegister = document.querySelector("#form");
    const inputs = document.querySelectorAll("#form input");
    const productImage = document.getElementById("productImage");

    const regEx = {
      text: /^[a-zA-ZÀ-ÿ\s|.|,}]{2,256}$/, 
      text2: /^[a-zA-ZÀ-ÿ\s|.|,}]{20,256}$/, 
      number:/^[0-9]+([.{1}|,{1}][0-9]+)?$/,
      img: /(.jpg|.jpeg|.png|.gif)$/i,
    };
  
    let campos = null 
    if (document.getElementById("title").innerText=="Creación de Producto"){
        campos = {
            name: false,
            description: false,
            bitterness: false,
            alcohol: false,
            color: false,
            carbonation: false,
            price: false,
            productImage:false
          };
    }else{
        campos = {
            name: true,
            description: true,
            bitterness: true,
            alcohol: true,
            color: true,
            carbonation: true,
            price: true,
            productImage:true          };
    }
    
    const validarFormulario = (e) => {
        console.log(e)
        switch (e.target.name) {
            case "name":
                validarCampo(regEx.text,"La cantidad minima de caracteres es de 2. Solo pueden usarse letras",e.target,"name");
                break;
            case "description":
                validarCampo(regEx.text2,"La cantidad minima de caracteres es de 2. Solo pueden usarse letras",e.target,"description");
                break;
            case "bitterness":
                validarCampo(regEx.number,"Solo se admiten valores numericos",e.target,"bitterness");
                break;
            case "alcohol":
                validarCampo(regEx.number,"Solo se admiten valores numericos",e.target,"alcohol");
                break;
            case "color":
                validarCampo(regEx.number,"Solo se admiten valores numericos",e.target,"color");
                break;
            case "hop":
                validarCampo(regEx.text,"La cantidad minima de caracteres es de 2. Solo pueden usarse letras",e.target,"hop");
                break;
            case "carbonation":
                validarCampo(regEx.text,"La cantidad minima de caracteres es de 2. Solo pueden usarse letras",e.target,"carbonation");
                break;
            case "price":
                validarCampo(regEx.number,"Solo se admiten valores numericos",e.target,"price");
                break;
            case "image":
                validarCampo(regEx.img,"Solo se admiten archivos de imagen jpg, jpeg, png o gif",e.target,"image");
                break;
        }
    };

    const validarCampo = (regEx, msgErr, input, field) => {
        if (regEx.test(input.value)){
            document.getElementById(`msgFront_${field}`).innerHTML = "";
            document.getElementById(`msgFront_${field}`).classList.remove("text-danger");
            document.getElementById(`msgFront_${field}`).classList.add("rg-input");
            document.getElementById(`${field}`).classList.remove("is-invalid");
            campos[field] = true;
        }else{
            document.getElementById(`msgFront_${field}`).innerHTML = msgErr;
            document.getElementById(`msgFront_${field}`).classList.add("text-danger");
            document.getElementById(`msgFront_${field}`).classList.remove("rg-input");
            document.getElementById(`${field}`).classList.add("is-invalid");
            campos[field] = false;
        }
    };
  
    inputs.forEach((input) => {
      input.addEventListener("keyup", validarFormulario);
      input.addEventListener("blur", validarFormulario);
      
    });

    document.getElementById("productImage").addEventListener("change", valExtFile);
     
    function valExtFile() {
        console.log("estoy en extension de archivo");
        const filePath = productImage.value;
        let extension = filePath.substring(filePath.lastIndexOf("."),filePath.length);  
        if (productImage == null) {
        return true;
        }else if(document.getElementById("productImage").getAttribute("accept").split(",").indexOf(extension) > 0){
            document.getElementById(`msgFront_productImage`).innerHTML = "";
            document.getElementById(`msgFront_productImage`).classList.remove("text-danger");
            return true;
        }else{
            document.getElementById(`msgFront_productImage`).innerHTML = `Los formatos permitidos son .png,jpg, jpeg y gif`;
            document.getElementById(`msgFront_productImage`).classList.add("text-danger");
            campos.productImage = false;
            return false;
        }
    }

    formRegister.addEventListener("submit", (e) => {
       // e.preventDefault(); 
        console.log(campos) 
        Object.values(campos).filter(value=>{return !value}).length == 0?formRegister.submit():null;
    });
  };
  