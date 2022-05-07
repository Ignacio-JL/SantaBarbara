fetch("/js/stock.json")
    .then((response) => response.json())
    .then((result) => {
        printSearchs(result);
        
    })
    .catch((error) => console.log(error));

function printSearchs(productos){
    document.querySelector('#list-searchs').innerHTML = '';
    let nodo='';
    productos.forEach(p => {
        nodo += `
            <li><a href="/pages/detail.html?id=${p.id}">${p.name}</a></li>
        `
    });
    document.querySelector('#list-searchs').innerHTML = nodo;
}

let inputSearch = document.querySelector('#input-search')

// Compara por cada tipeo
inputSearch.addEventListener("keyup", buscardor_interno);


// buscador
function buscardor_interno(){
    let filter = inputSearch.value.toUpperCase();
    let li = document.querySelector('#list-searchs').getElementsByTagName("li");

    for (i = 0; i < li.length; i++){

        let a = li[i].getElementsByTagName("a")[0];
        let textValue = a.textContent || a.innerText;
        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            document.querySelector('#list-searchs').style.display="block";
        }
        else{
            li[i].style.display = "none";
        }
    }


}

// Abre la pantalla del buscador
document.getElementById('openSearch').addEventListener("click", (event)=>{
    event.preventDefault();
    document.body.style.background = "#FE98B5";
    document.querySelector('#container-main-search').style.display= "block";
    document.querySelector('#body-content').style.display = "none"
})


// Cerrar la pantalla del buscador
document.getElementById('close-search').onclick = () =>{
    document.querySelector('#container-main-search').style.display= "none";
    document.body.style.background = "none";
    document.querySelector('#body-content').style.display = ""
}