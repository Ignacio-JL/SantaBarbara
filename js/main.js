
class Producto{
    constructor(id, image, season, size, name, type, price, description){
        this.id = id;
        this.image = image;
        this.season = season;
        this.size = size;
        this.name = name;
        this.type = type;
        this.price = price;
        this.description = description;
    }
    
}


let productos = [];
const url = "/js/stock.json";
const contenedorProd = document.getElementById("contenedor");
// Carga el array con los productos
const cargarArray = () => {
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            result.forEach(prod => {
                productos.push(new Producto(prod.id, prod.image, prod.season, prod.size, prod.name, prod.type, prod.price, prod.description));
            });
            
        })
        .catch((error) => console.log(error));
}



// Muestra los productos en el html
function mostrarProductos(lista){
    
    let nodo = '';
    for(prod of lista){
        // Editar a gusto el html que se generara por cada producto -> prod.id, prod.name, prod.season... etc
        nodo +=    `<article>
                    <h3>${prod.name}</h3>
                    <img src="${prod.image[0]}"> 
                    <p>${prod.price}</p>
                    </article>`;
        //Cargo solo la primer imagen ya que es la unica que se va a mostrar en productos
    }


    document.getElementById("contenedor").innerHTML = nodo;
    sessionStorage.setItem("Productos", JSON.stringify(productos));

}
// Estra promesa la hago para generar un delay diminuto ya que sino no alcanza a cargar los datos
const promiseProductos = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(productos);
    },400);
    setTimeout(() => {
        reject("error")
    }, 1000);
});

cargarArray();

promiseProductos
    .then(response => mostrarProductos(response))
    .catch( error => console.log(error));

    
// Filtrado por bikini
document.getElementById("bikinis").onclick = () => {
    mostrarProductos(productos.filter(e => e.type == 'bikini'));
}
// filtrado por enteriza
document.getElementById("enteriza").onclick = () => {
    mostrarProductos(productos.filter(e => e.type == 'enteriza'));
}
// filtrado por conjunto
document.getElementById("conjunto").onclick = () => {
    mostrarProductos(productos.filter(e => e.type == 'comfy'));
}

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


