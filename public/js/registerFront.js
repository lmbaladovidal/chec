window.onload = (() => {
  
    function validar(){
        if(document.getElementById("password").value == document.getElementById("passVerify").value){
            document.getElementById("passVerify").style.backgroundColor = 'green'
            document.getElementById("pwsd-error-msg").innerHTML = ''
        }else{
            document.getElementById("passVerify").style.backgroundColor = 'pink'
            document.getElementById("pwsd-error-msg").innerHTML = 'Error'
        }
    }
    
    const name = document.querySelector('#name');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const address = document.querySelector('#address');
    const birthDate = document.querySelector('#birthDate');
    const password = document.querySelector('#password');
    const passVerify = document.querySelector('#passVerify');
    const formRegister= document.querySelector('#formRegister')
    
        const errores = []
   
    
        name.addEventListener('change', () => {
                let nameValue = name.value

                nameValue= nameValue.trim()
                console.log(nameValue);
                    if ( nameValue.length <= 3) {
                    alert((' el nombre debe tener al menos 3 caracteres válidos'))
                }               
           
            })
            // if (errores.length > 0){
            //     event.preventDefault()
            //     let ulErrors = document.querySelector('div.errors ul')
            //     errores.forEach(error =>{
            //         ulErrors.innerHTML += `<li> ${error}</li>`
            //     })
            
            // }
    })
   