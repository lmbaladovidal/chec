window.onload = () => {
    const add = document.querySelectorAll('#add5');
    add.forEach(addButton => {
        //addButton.addEventListener('click', function calcular(){
        addButton.addEventListener('click', calcular);
        
    })
function calcular(){

const itemPrice = document.querySelector('#msgFront_Cart')
const PrecioCart = itemPrice.textContent

console.log(PrecioCart);
}
    
    // // // const formCart = document.getElementById("formProductCart");
    // // // const inputs = document.querySelectorAll(".spinButton");
    // // // const buttons = document.querySelectorAll('#formProductCart button')
    // // // const add = document.getElementById('add')

    // // // //const price5 = parseInt(document.getElementById('price5'))
    // // // //const quantity5 = parseInt(document.getElementById('quantity5'))

    // // // const quantity = quantity5.value
    // // // const price = price5.value 
    // // //     console.log(price5);
    // // //     console.log(quantity);
        
    // // //     add.addEventListener('click', function calcular(){
      


    // // //         let quantitySub= quantity + 1
    // // //         let priceSub = quantitySub * price
    // // //          return priceSub
    // // //         })
    }
   
      
    // const a = []
        
    // console.log(inputs);
    // inputs.forEach((input) => {
    //     input.addEventListener("click", operaciones);
    // });
   
    //     function calculate(){
    //         formProductCart.addEventListener("submit", (e) => {
    //             e.preventDefault(); 
    //             console.log(e) 
    //             Object.values(campos).filter(value=>{return !value}).length == 0?formProductCart.submit():null;
    //         });
    //     }
        

    //     function calculate(e){  

            
    // //     elemento = document.getElementById("price" + id);
    // //     elemento = document.getElementById(e.target.id)
    // //     console.log("ENTRO PRECIO $ " + elemento.value );
    // //     counter = document.getElementById("spinButton" + id).value;
    // //     console.log(counter)
    // //     console.log (counter * price )
    // //     elemento.textContent = "$ " + price.slice(2,price.length)*counter
      

      

    //     }
