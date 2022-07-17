window.onload = () => {
  const formRegister = document.querySelector("#formRegister");
  const inputs = document.querySelectorAll("#formRegister input");
  const avatar = document.getElementById("avatar");

  const expresiones = {
    //name: /^[a-zA-Z0-9\_\-]{2,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{2,256}$/, // minimo 2 caracteres, Letras y espacios, pueden llevar acentos.
    lastName: /^[a-zA-ZÀ-ÿ\s]{2,256}$/, // minimo 2 caracteres, Letras y espacios, pueden llevar acentos.
    password: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,256}$/, // minimo 8 y 256 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    //birthDate: /^\d{8,14}$/, // numeros
    birthDate:/^(?:3[01]|[12][0-9]|0?[1-9])(0?[1-9]|1[1-2])\1\d{3}$/,
    address: /^[A-Za-z0-9\s°]{8,256}$/, // Letras, numeros, guion y guion_bajo
    avatar: /(.jpg|.jpeg|.png|.gif)$/i,
  };

  let campos = null 
    if (document.getElementById("title").innerText=="REGISTRO NUEVO USUARIO"){
      campos = {
        name: false,
        lastName: false,
        password: false,
        email: false,
        birthDate: false,
        address: false,
        avatar: true,
      }
    } else {
      campos = {
        name: true,
        lastName: true,
        password: true,
        email: true,
        birthDate: true,
        address: true,
        avatar: true,
    }
  }

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "name":
        validarCampo(
          expresiones.name,
          " Mínimo 2 caracteres. Sólo Letras",
          e.target,
          "name"
        );

        break;
      case "lastName":
        validarCampo(
          expresiones.lastName,
          "Mínimo 2 caracteres. Admite letras y acentos",
          e.target,
          "lastName"
        );
        break;
      case "password":
        validarCampo(
          expresiones.password,
          "Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número, y 1 caracter especial.",
          e.target,
          "password"
        );
        //validar();
        break;
      case "passVerify":
        validar();
        break;
      case "email":
        validarCampo(
          expresiones.email,
          "Debes escribir un formato válido de Email",
          e.target,
          "email"
        );
        break;
      case "birthDate":
        birthValidate( "Debes ser mayor de 18 Años");
        break;
      case "address":
        validarCampo(
          expresiones.address,
          "Mínimo 8 caracteres. Admite letras y números",
          e.target,
          "address"
        );
        break;
    }
  };
  // funcion para validad cada campo//
  const validarCampo = (expresion, texto, input, campo) => {
    if (expresion.test(input.value)) {
      document.getElementById(`msgFront_${campo}`).innerHTML = "";
      document.getElementById(`msgFront_${campo}`).classList.remove("text-danger");
      document.getElementById(`msgFront_${campo}`).classList.add("rg-imput");
      document.getElementById(`${campo}`).classList.remove("is-invalid");
      campos[campo] = true;
    } else {
      document.getElementById(`msgFront_${campo}`).innerHTML = texto;
      document.getElementById(`msgFront_${campo}`).classList.add("text-danger");
      document.getElementById(`msgFront_${campo}`).classList.remove("rg-imput");
      document.getElementById(`${campo}`).classList.add("is-invalid");
      campos[campo] = false;
    }
  };

  // Recorre todos los INPUTS del formulario, escuchando métodos de acción//
  inputs.forEach((input) => {
    console.log(input)  // 1* ACA ESTA EL PROBLEMA DE LA VALIDACION DE FECHA. Todos los inputs tienen todas las validaciones
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
    input.addEventListener("change", valExtFile);
    
  });
  
  //2* Por eso lo separé:
  document.getElementbyID('birthDate').addEventListener("blur", birthValidate)
 
  // función para validad la imagen//

  function valExtFile() {
    const filePath = avatar.value;
    let extension = filePath.substring(
      filePath.lastIndexOf("."),
      filePath.length
    );

    if (avatar == null) {
      return true;
    } else if (
      document
        .getElementById("avatar")
        .getAttribute("accept")
        .split(",")
        .indexOf(extension) > 0
    ) {
      document.getElementById(`msgFront_avatar`).innerHTML = "";
      document
        .getElementById(`msgFront_avatar`)
        .classList.remove("text-danger");
      return true;
    } else {
      document.getElementById(
        `msgFront_avatar`
      ).innerHTML = `Los formatos permitidos son .png,jpg, jpeg y gif`;
      document.getElementById(`msgFront_avatar`).classList.add("text-danger");
      campos.avatar = false;
      return false;
    }
  }

  // funcion para validar coincidencias entre ambas contraseñas//
  function validar() {
    if (
      document.getElementById("password").value ==
      document.getElementById("passVerify").value
    ) {
      document.getElementById("passVerify").style.backgroundColor = "grey";
      document.getElementById("msgFront_passVerify").innerHTML = "";
    } else {
      document.getElementById("passVerify").style.backgroundColor = "pink";
      document.getElementById("msgFront_passVerify").innerHTML = "Error";
    }
  }
   // función para validar la EDAD//
  function birthValidate( texto, input  ) {
      
        const expresion = birthDate.value;
        const m = moment(expresion, "YYYY-MM-DD");
        const ageUser= parseInt(m.fromNow());
        const ageUser2=ageUser
        
        console.log(ageUser2);
       
        if(ageUser2 < 18 ){
          document.getElementById(`msgFront_birthDate`).innerHTML = texto
          document.getElementById(`msgFront_birthDate`).classList.add("text-danger")
          document.getElementById(`msgFront_birthDate`).classList.remove("rg-imput")
          document.getElementById('birthDate').classList.add("is-invalid")
          campos.birthDate= false;
          console.log(campos.birthDate);
          } else {
          document.getElementById(`msgFront_birthDate`).innerHTML = ""
          document.getElementById(`msgFront_birthDate`).classList.remove("text-danger")
          document.getElementById(`msgFront_birthDate`).classList.add("rg-imput")
          document.getElementById('birthDate').classList.remove("is-invalid");
          campos.birthDate= true;
          console.log(campos.birthDate);
          
          }
    }



  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!
      campos.name &&
      campos.lastName &&
      campos.email &&
      campos.birthDate &&
      campos.address &&
      campos.password
    ) 
    {
      document.getElementById("msgFront_submit").innerHTML = "Debes completar correctamente el formulario."
      setTimeout(() => {
        document.getElementById("msgFront_submit").innerHTML = ""
        document.getElementById('email').classList.remove("is-invalid");
      },6000)

    return formRegister.reset();
    } else
      
    {
     return formRegister.submit();
    } 
    
        
    
        
  });
};
