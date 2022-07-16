window.onload = () => {
    const form = document.querySelector("form");
    const inputs = document.querySelectorAll("form input");
    const productImage = document.getElementById("productImage");

    const regEx = {
      text: /^[a-zA-ZÀ-ÿ\s|.|,}]{2,256}$/, 
      email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 
      number:/^[0-9]+([.{1}|,{1}][0-9]+)?$/,
      notEmpty: /\S{8,16}$/,
      img: /(.jpg|.jpeg|.png|.gif)$/i,
    };
  
    console.log(inputs);

    campos = {
        email: false,
        password: false
        };
    
    const validarFormulario = (e) => {
        console.log(e)
        switch (e.target.name) {
            case "email":
                validarCampo(regEx.email,"Ingrese una direccion de mail valida.",e.target,"email");
                break;
            case "password":
                validarCampo(regEx.notEmpty,"La contraseña debe tener al menos 8 caracteres",e.target,"password");
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
      input.addEventListener("blur", validarFormulario);      
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault(); 
        console.log(campos) 
        Object.values(campos).filter(value=>{return !value}).length == 0?form.submit():null;
    });
  };
  