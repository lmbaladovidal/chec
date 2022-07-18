window.onload = () => {
    const formCart = document.getElementById("formRecipes");
    const inputs = document.querySelectorAll("#formRecipes input");
    const buttons = document.querySelectorAll('#formRecipes button')

        const a = []
        
        //const inputs = document.querySelectorAll("#formRegister input");
        //const inputs = document.querySelectorAll("#formProductCart input");
        
        //inputs.forEach((input) => {
       
        //input.addEventListener("keyup", validarFormulario);
        //input.addEventListener("blur", validarFormulario);
        //input.addEventListener("change", valExtFile);

  //});

        function calculate(id){  

            elemento = document.getElementById("price" + id);
            counter = document.getElementById("spinButton" + id).value;
            console.log(counter)
            const price = document.getElementById("price" + id).textContent

            elemento.textContent = "$ " + price.slice(2,price.length)*counter}
}