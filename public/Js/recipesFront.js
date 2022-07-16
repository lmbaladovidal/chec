window.onload = () => {
    const formRecipes = document.getElementById("formRecipes");
    const inputs = document.querySelectorAll("#formRecipes input");
    const buttons = document.querySelectorAll('#formRecipes button')

    const fields = {
        name: false,
        volume: false,
        boilvolume: false,
        boilTime: false,
        alcohol: false,
        targetFG: false,
        targetOG: false,
        initialPH: false,
        finalPH: false,
        mashTemp: false,
        mashTime: false,
        malt1: false,
        malt1Amount: false,
        hop1: false,
        hop1Amount: false,
        hop1Moment: false,
        yeast: false,
        yeastAmount: false
    }

    const regEx = {

        text: /^[a-zA-ZÀ-ÿ\s|.|,}]{5,256}$/, 
        number:/^[0-9]+([.{1}|,{1}][0-9]+)?$/,
        alfanumeric:/^[A-Za-z0-9\s°]{3,256}$/
       
      };
    const validarFormulario = (e) => {
        console.log(e)
        switch (e.target.name) {
            case "name":
                validarCampo(regEx.alfanumeric,"Mínimo 3 caracteres",e.target,"name");
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
            case "mashTemp":
                validarCampo(regEx.number,"Solo números",e.target,"mashTemp");
                break;
            case "mashTime":
                validarCampo(regEx.number,"Solo números",e.target,"mashTime");
                break;
            case "malt1":
                validarCampo(regEx.text,"Solo letras",e.target,"malt1");
                break;  
            case "malt1Amount":
                validarCampo(regEx.number,"Solo números",e.target,"malt1Amount");
                break;    
            case "malt2":
                validarCampo(regEx.text,"Solo letras",e.target,"malt2");
                break;  
            case "malt2Amount":
                validarCampo(regEx.number,"Solo números",e.target,"malt2Amount");
                break; 
            case "malt3":
                validarCampo(regEx.text,"Solo letras",e.target,"malt3");
                break;  
            case "malt3Amount":
                validarCampo(regEx.number,"Solo números",e.target,"malt3Amount");
                break;  
            case "malt4":
                validarCampo(regEx.text,"Solo letras",e.target,"malt4");
                break;  
            case "malt4Amount":
                validarCampo(regEx.number,"Solo números",e.target,"malt4Amount");
                break;  
            case "malt5":
                validarCampo(regEx.text,"Solo letras",e.target,"malt5");
                break;  
            case "malt5Amount":
                validarCampo(regEx.number,"Solo números",e.target,"malt5Amount");
                break;  
            case "hop1":
                validarCampo(regEx.text,"Solo letras",e.target,"hop1");
                break; 
            case "hop1Amount":
                validarCampo(regEx.number,"Solo números",e.target,"hop1Amount");
                break; 
            case "hop1Moment":
                validarCampo(regEx.alfanumeric,"Mínimo 3 caracteres",e.target,"hop1Amount");
                break;
            case "hop2":
                validarCampo(regEx.text,"Solo letras",e.target,"hop2");
                break; 
            case "hop2Amount":
                validarCampo(regEx.number,"Solo números",e.target,"hop2Amount");
                break; 
            case "hop2Moment":
                validarCampo(regEx.alfanumeric,"Mínimo 3 caracteres",e.target,"hop2Amount");
                break;
            case "hop3":
                validarCampo(regEx.text,"Solo letras",e.target,"hop3");
                break; 
            case "hop3Amount":
                validarCampo(regEx.number,"Solo números",e.target,"hop3Amount");
                break; 
            case "hop3Moment":
                validarCampo(regEx.alfanumeric,"Mínimo 3 caracteres",e.target,"hop3Amount");
                break; 
            case "yeast":
                validarCampo(regEx.alfanumeric,"Mínimo 3 caracteres",e.target,"yeast");
                break; 
            case "yeastAmount":
                validarCampo(regEx.number,"Solo números",e.target,"yeastAmount");
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
            fields[field] = true;
            
        }else{
            document.getElementById(`msgFront_${field}`).innerHTML = msgErr;
            document.getElementById(`msgFront_${field}`).classList.add("text-danger");
            document.getElementById(`msgFront_${field}`).classList.remove("rg-input");
            document.getElementById(`${field}`).classList.add("is-invalid");
            fields[field] = false;
            
        }
    };
  
    inputs.forEach((input) => {
      input.addEventListener("keyup", validarFormulario);
      input.addEventListener("blur", validarFormulario);
      input.addEventListener("change", validarFormulario);          
    });


    formRecipes.addEventListener("submit", (e) => {
        e.preventDefault();
    
        if (!
            fields.name &&
            fields.volume &&
            fields.boilvolume &&
            fields.boilTime &&
            fields.alcohol &&
            fields.targetFG &&
            fields.targetOG &&
            fields.initialPH &&
            fields.finalPH &&
            fields.mashTemp &&
            fields.mashTime &&
            fields.malt1 &&
            fields.malt1Amount &&
            fields.hop1 &&
            fields.hop1Amount &&
            fields.hop1Moment &&
            fields.yeast &&
            fields.yeastAmount
        ) 
    
        {
            
          document.getElementById("msgFront_submit").innerHTML = "Debes completar correctamente el formulario."
          setTimeout(() => {
            document.getElementById("msgFront_submit").innerHTML = ""
            //document.getElementById('email').classList.remove("is-invalid");
          },6000)
    
        return buttons.reset();
        } else
          
        {
         return formRecipes.submit();
        }    
            
        
            
      });
}