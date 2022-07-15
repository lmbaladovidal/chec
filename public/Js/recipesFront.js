window.onload = () => {
    const formRecipes = document.getElementById("formRecipes");
    const inputs = document.querySelectorAll("#formRecipes input");


    const regEx = {

        text: /^[a-zA-ZÀ-ÿ\s|.|,}]{5,256}$/, 
        number:/^[0-9]+([.{1}|,{1}][0-9]+)?$/,
        alfanumeric:/^[A-Za-z0-9\s°]{5,256}$/
       
      };
    const validarFormulario = (e) => {
        console.log(e)
        switch (e.target.name) {
            case "name":
                validarCampo(regEx.alfanumeric,"Mínimo 5 caracteres",e.target,"name");
                break;
            case "volume":
                validarCampo(regEx.number,"Solo números",e.target,"volume");
                break;
            case "boilvolume":
                validarCampo(regEx.number,"Solo números",e.target,"boilvolume");
                break;
            case "boilTime":
                validarCampo(regEx.number,"Solo números",e.target,"boilTime");
                break;
            case "alcohol":
                validarCampo(regEx.number,"Solo números",e.target,"alcohol");
                break;
            case "targetFG":
                validarCampo(regEx.number,"Solo números",e.target,"targetFG");
                break;
            case "targetOG":
                validarCampo(regEx.number,"Solo números",e.target,"targetOG");
                break;
            case "initialPH":
                validarCampo(regEx.number,"Solo números",e.target,"initialPH");
                break;
            case "finalPH":
                validarCampo(regEx.number,"Solo números",e.target,"finalPH");
                break;
        }
    };

    const validarCampo = (regEx, msgErr, input, field) => {
        console.log(field);
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


    formRegister.addEventListener("submit", (e) => {
        e.preventDefault();
    
        // if (!e.target.name)  {
        //   document.getElementById(`msgFront_${field}`).innerHTML = "Debes completar correctamente el formulario."
        //   setTimeout(() => {
        //     document.getElementById("msgFront_submit").innerHTML = ""
        //     document.getElementById('email').classList.remove("is-invalid");
        //   },6000)
    
       // return formRegister.reset();
        // } else
          
        // {
        //  return formRegister.submit();
        // } 
        
            
        
            
      });
}