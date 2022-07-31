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
    const deleteButtons = document.querySelectorAll('.buttonDelete')
    console.log(deleteButtons)

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
    console.log(changeQuantity);
    changeQuantity.forEach(itemQuantity => {
        itemQuantity.addEventListener('change', quantityChanged)
    })

    function quantityChanged(event) {
        const input = event.target;
        input.value <= 0 ? (input.value = 1) : null;
        updateShoppingCartSubtotal(shoppingCartItemsContainer);
      }

    const cervezaInCart = shoppingCartItemsContainer.querySelectorAll('#shoppingCartItem')
      console.log(cervezaInCart);


      

    function updateShoppingCartTotal() {
        
        const shippingCost =  Number(document.getElementsByClassName('shipping-cost').value)
        const total = document.getElementsByClassName('total')
        total = subtotal + shippingCost
        total.innerHTML = `${total.toFixed(2)}`
    }
   

});


