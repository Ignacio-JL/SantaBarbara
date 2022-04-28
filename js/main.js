//Inicio Crear cards segun info el json
const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('../products.json')
        const data = await res.json()
        //console.log(data);
        bikiniCards(data)
    } catch (error) {
        console.log(error);
    }
}

const bikiniCards = data => {
    data.forEach(producto => {
        if (producto.type === "bikini") {
            templateCard.querySelector('h5').textContent = producto.name.toUpperCase()
            templateCard.querySelector('p').textContent = producto.price
            templateCard.querySelector('img').setAttribute("src", producto.image)
            templateCard.querySelector('button').dataset.id = producto.id
    
            const clone = templateCard.cloneNode(true)
            fragment.appendChild(clone)
        }         
    })
    items.appendChild(fragment)
}
//Fin crear cards

