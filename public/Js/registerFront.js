

window.onload = () => {

  const name = document.querySelector("#name");
  const lastName = document.querySelector("#lastName");
  const email = document.querySelector("#email");
  const address = document.querySelector("#address");
  const birthDate = document.querySelector("#birthDate");
  const password = document.querySelector("#password");
  const passVerify = document.querySelector("#passVerify");
  const formRegister = document.querySelector("#formRegister");


  name.addEventListener("change", () => {
    let nameValue = name.value.trim()
    nameValue.length <= 2 ? msgFrontName.innerHTML = "El nombre debe tener al menos 3 caracteres válidos" :  msgFrontName.innerHTML = ""
    });

  lastName.addEventListener("change", () => {
    let lastNameValue = lastName.value.trim();
    lastNameValue.length <= 2 ? msgFrontLastName.innerHTML = "El apellido debe tener al menos 3 caracteres válidos" : msgFrontLastName.innerHTML = " "
  });
  
  address.addEventListener("change", () => {
    let addressValue = address.value;
    addressValue.length <= 8 ? msgFrontAddress.innerHTML = "Ingresa tu dirección de envío preferida." : msgFrontAddress.innerHTML  = " " 
   });
  //formato email vàlido - no puede repetirse con los mails ya registrados.

  password.addEventListener('change', () => {
    let passwordValue = password.value.trim();
   
   const passValidate = password.isStrongPassword({
        minLength: 8,
        // minLowercase: 1,
        // minUppercase: 1,
        // minNumbers: 1,
        // minSymbols: 1,
        // returnScore: false,
        // pointsPerUnique: 1,
        // pointsPerRepeat: 0.5,
        // pointsForContainingLower: 10,
        // pointsForContainingUpper: 10,
        // pointsForContainingNumber: 10,
        // pointsForContainingSymbol: 10,
      })

      
    console.log(passValidate + "   passwordValidate!!!");

    passValidate < 20 ? msgFrontPassword.innerHTML = "" : msgFrontPassword.innerHTML  = "La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula y un número."

    });
        

    // passwordValue.isStrongPassword(passwordValue[{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}]) ? msgFrontPassword.innerHTML = "" : msgFrontPassword.innerHTML  = "La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula y un número."
  //})


  function validar() {
    if (
      document.getElementById("password").value ==
      document.getElementById("passVerify").value
    ) {
      document.getElementById("passVerify").style.backgroundColor = "green";
      document.getElementById("pwsd-error-msg").innerHTML = "";
    } else {
      document.getElementById("passVerify").style.backgroundColor = "pink";
      document.getElementById("pwsd-error-msg").innerHTML = "Error";
    }
  }
};
