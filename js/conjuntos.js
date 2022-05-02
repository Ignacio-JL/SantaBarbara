//Productos
const bikinis = document.getElementById('bikinis')
const productsCard = document.getElementById('products-card').content
const fragmentTwo = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchDataTwo()
})

const fetchDataTwo = async () => {
    try {
        const res = await fetch('/js/stock.json')
        const datos = await res.json()
        //console.log(datos);
        cardsproductos(datos)
    } catch (error) {
        console.log(error);
    }
}

const cardsproductos = datos => {
    datos.forEach(producto => {
        if (producto.type === 'comfy') {
            productsCard.querySelector('h5').textContent = producto.name.toUpperCase() 
            productsCard.querySelector('p').textContent = 'AR$ ' + producto.price
            productsCard.querySelector('img').setAttribute("src", producto.image[0])
            productsCard.querySelector('button').dataset.id = producto.id
            productsCard.querySelector('a').setAttribute("href", `/pages/detail.html?id=${producto.id}`)
            const clone = productsCard.cloneNode(true)
            fragmentTwo.appendChild(clone)
        }         
    })
    bikinis.appendChild(fragmentTwo)
}




