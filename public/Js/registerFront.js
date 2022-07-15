window.onload = () => {
  // const name = document.querySelector('#name');
  // const lastName = document.querySelector('#lastName');
  // const email = document.querySelector('#email');
  // const address = document.querySelector('#address');
  // const birthDate = document.querySelector('#birthDate');
  // const password = document.querySelector('#password');
  // const passVerify = document.querySelector('#passVerify');
  const formRegister = document.querySelector("#formRegister");
  const inputs = document.querySelectorAll("#formRegister input");
  const avatar = document.getElementById("avatar");

  const expresiones = {
    //name: /^[a-zA-Z0-9\_\-]{2,16}$/, // Letras, numeros, guion y guion_bajo
    name: /^[a-zA-ZÀ-ÿ\s]{2,256}$/, // minimo 2 caracteres, Letras y espacios, pueden llevar acentos.
    lastName: /^[a-zA-ZÀ-ÿ\s]{2,256}$/, // minimo 2 caracteres, Letras y espacios, pueden llevar acentos.
    password: /^[a-zA-Z0-9ñ!¿¡°"#$%&'()*,-./:;=?@_`{}~¬¨]{8,256}$/, // minimo 8 caracteres.
   // password: /^(?=.\d)(?=.[\u0021-\u002b\u003c-\u0040])(?=.[A-Z])(?=.[a-z])\S{8,256}$/, // minimo 8 y 256 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.
   // password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/, // Validación opcional => No funciona (Ara).
    // password: /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[$@$!%?&])([A-Za-z\d$@$!%?&]|[^ ]){8,15}$/, //Validación opcional => No funciona (Alba)
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    birthDate: /^\d{8,14}$/, // numeros
    address: /^[A-Za-z0-9\s°]{8,256}$/, // Letras, numeros, guion y guion_bajo
    avatar: /(.jpg|.jpeg|.png|.gif)$/i,
  };

  const campos = {
    name: false,
    lastName: false,
    password: false,
    email: false,
    birthDate: true,
    address: false,
    avatar: true,
  };

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
          "Mínimo 8 caracteres",
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
        validarCampo(expresiones.birthDate, e.target, "birthDate");
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
      document
        .getElementById(`msgFront_${campo}`)
        .classList.remove("text-danger");
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

  inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
    input.addEventListener("change", valExtFile);
  });
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

  // funcion para validad coincidencias entre ambas contraseñas//
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

  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
      campos.name &&
      campos.lastName &&
      campos.email &&
      campos.birthDate &&
      campos.address &&
      campos.password
    ) {
      formRegister.submit();
    }
  });
};
