<<<<<<< HEAD
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
=======
//window.onload = () => {
window.addEventListener("load", function() { 
    const formCart = document.getElementById("formProductCart"); // console.log OK
    const shoppingCartItemsContainer = document.querySelector('#shoppingCartItemsContainer');  // console.log OK
    const shoppingCartItem = document.querySelectorAll('#shoppingCartItem')
    
    function updateShoppingCartSubtotal() {
        let subtotal = 0;
        const shoppingCartSubotal = document.querySelector('#subtotal');
        const shoppingCartItems = document.querySelectorAll("#shoppingCartItem");
       
        shoppingCartItems.forEach(shoppingCartItem => {
            const shoppingCartItemPrice = Number(shoppingCartItem.querySelector('#shoppingCartItemPrice').innerText);
            const shoppingCartItemQuantity = Number(shoppingCartItem.querySelector('#shoppingCartItemQuantity').value);
        
        subtotal = subtotal + shoppingCartItemPrice * shoppingCartItemQuantity
       
        });

        shoppingCartSubotal.innerHTML = `${subtotal.toFixed(2)}`

    }

    updateShoppingCartSubtotal(shoppingCartItemsContainer)
    
    // Función remover elemento del carrito 
    const deleteButtons = document.querySelectorAll('#buttonDelete')

    deleteButtons.forEach(deleteButton => {
        deleteButton.addEventListener('click', removeShoppingCartItem)
    })
    function removeShoppingCartItem(event) {
        const deleteButtonClicked = event.target
        deleteButtonClicked.closest("#shoppingCartItem").remove();
        updateShoppingCartSubtotal(shoppingCartItemsContainer)   
    }    

    // Función actualizar cantidad de los elementos del carrito
    const changeQuantity = document.querySelectorAll('#shoppingCartItemQuantity')
    changeQuantity.forEach(itemQuantity => {
        itemQuantity.addEventListener('change', quantityChanged)
    })

    function quantityChanged(event) {
        const input = event.target;
        input.value <= 0 ? (input.value = 1) : null;
        updateShoppingCartSubtotal(shoppingCartItemsContainer);
      }

    const cervezaInCart = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItem')
      console.log(cervezaInCart);
    // for (let i = 0; i < cervezaInCart.length; i++) {
    //     if (cervezaInCart[i].innerText === itemTitle) {
    //       let elementQuantity = cervezaInCart[i].parentElement.querySelector(
    //         '.shoppingCartItemQuantity'
    //       );
    //       elementQuantity.value++;
    //       $('.toast').toast('show');
    //       updateShoppingCartTotal();
    //       return;
    //     }
    //   }

});

// }
>>>>>>> b7e454b6aeaef5944f2341d1e21f31e81be91ddf
