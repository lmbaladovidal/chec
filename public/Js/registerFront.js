window.onload = (() => {
    const name = document.querySelector('#name');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const address = document.querySelector('#address');
    const birthDate = document.querySelector('#birthDate');
    const password = document.querySelector('#password');
    const passVerify = document.querySelector('#passVerify');
    const formRegister= document.querySelector('#formRegister')
    const inputs = document.querySelectorAll('#formRegister input');
    const avatar= document.getElementById('avatar')
    

    const expresiones = {
        //name: /^[a-zA-Z0-9\_\-]{2,16}$/, // Letras, numeros, guion y guion_bajo
        name: /^[a-zA-ZÀ-ÿ\s]{2,256}$/, // minimo 2 caracteres, Letras y espacios, pueden llevar acentos.
        lastName: /^[a-zA-ZÀ-ÿ\s]{2,256}$/, // minimo 2 caracteres, Letras y espacios, pueden llevar acentos.
        password: /^[a-zA-Z0-9ñ!¿¡°"#$%&'()*+,-./:;=?@_`{}~¬¨]{8,256}$/, // minimo 8 caracteres.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        birthDate: /^\d{8,14}$/, // numeros
        address: /^[A-Za-z0-9\s°]{8,256}$/, // Letras, numeros, guion y guion_bajo
        avatar: /^(.png|.jpg|.jpeg|.gif)$/
    }
  
    const campos = {
        name: false,
        lastName: false,
        password: false,
        email: false,
        birthDate: false,
        address: false
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "name":
                validarCampo(expresiones.name," 2 caracteres. Sólo Letras", e.target, 'name');
                
            break;
            case "lastName":
                validarCampo(expresiones.lastName," 2 caracteres. Admite letras y acentos",  e.target, 'lastName');
            break;
            case "password":
                validarCampo(expresiones.password, 'minimo 8 caracteres', e.target, 'password');
                validarPassword2();
            break;
            case "passwordVerify":
                validar();
            break;
            case "email":
                validarCampo(expresiones.email, e.target, 'email');
            break;
            case "birthDate":
                validarCampo(expresiones.birthDate, e.target, 'birthDate');
            break;
            case "address":
                validarCampo(expresiones.address," 8 caracteres. Admite letras y números", e.target, 'address');
            break;
            case "avatar":
                valExtFile(expresiones.avatar,'avatar');
            break;
        }
    }

    const validarCampo = (expresion, texto ,input, campo) => {
        if(expresion.test(input.value)){
            document.getElementById(`msgFront_${campo}`).innerHTML = "" ;
            document.getElementById(`msgFront_${campo}`).classList.remove('text-danger') 
                
            campos[campo] = true;
        } else {
            document.getElementById(`msgFront_${campo}`).innerHTML = `Minimo de` + texto ;
            document.getElementById(`msgFront_${campo}`).classList.add('text-danger')
            campos[campo] = false;
                }    
        }
      
    inputs.forEach((input) => {
                input.addEventListener('keyup', validarFormulario);
                input.addEventListener('blur', validarFormulario);
                input.addEventListener('change', valExtFile);
    });

    function valExtFile (expresion, campo){
        if(!expresion.exec(avatar.value)){
            console.log("FALSE"+ avatar.value);
            document.getElementById(`msgFront_${campo}`).innerHTML = "" ;
            document.getElementById(`msgFront_${campo}`).classList.remove('text-danger') 
            campos[campo] = false;
            

        }else {
            console.log("Trueee");
            document.getElementById(`msgFront_${campo}`).innerHTML = `Los formatos permitidos son .png,jpg, jpeg y gif` ;
            document.getElementById(`msgFront_${campo}`).classList.add('text-danger')
            campos[campo] = true;
            }    
    }

  
    function validar(){
        if(document.getElementById("password").value == document.getElementById("passVerify").value){
            document.getElementById("passVerify").style.backgroundColor = 'green'
            document.getElementById("pwsd-error-msg").innerHTML = ''
        }else{
            document.getElementById("passVerify").style.backgroundColor = 'pink'
            document.getElementById("pwsd-error-msg").innerHTML = 'Error'
        }
    }

    })

formulario.addEventListener('submit', (e) => {
        e.preventDefault();
    
        if(campos.name && campos.lastName && campos.password && campos.email && campos.birthDate && campos.birthDate ){
            formulario.submit()}else{
                formulario.reset()
            }
        })
