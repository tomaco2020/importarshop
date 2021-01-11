window.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll("button[data-order]")
    orderButtons.forEach((item) => {
        item.addEventListener("click", (event) => {
            const button = event.currentTarget /*contiene el evento actual. button-order en este caso*/
            const container = button.parentNode /*contiene el nodo padre del evento actual, en este caso el DIV*/

            const order = {
                id : button.getAttribute("data-order"),
                title : container.querySelector(".title").innerText,
                price : container.querySelector(".price").innerText

            }
            localStorage.setItem("order",JSON.stringify(order))
            const url = window.location.href.replace("productos.html","order.html")
            window.location.href = url
        })
    })

 
})

