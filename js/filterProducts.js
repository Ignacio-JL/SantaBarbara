// const url = "/js/stock.json";

// Carga el array con los productos

fetch("/js/stock.json")
    .then((response) => response.json())
    .then((result) => {
        showProductsSlide(result);
        
    })
    .catch((error) => console.log(error));


    function showProductsSlide(prod){
        // Generamos array de bikinis
        let bikinis = prod.filter(e => e.type =="bikini");

        // Generamos array de enteras
        let enterizas = prod.filter(e => e.type =="enteriza");

        // Generamos array de comfys
        let comfy = prod.filter(e => e.type =="comfy");

        // Generamos slide Bikinis
        let swipperContentBikini = document.querySelector('#swiper-bikini');
        swipperContentBikini.innerHTML ='';
        swipperContentBikini.innerHTML = nodeGenerator(bikinis);
        let swipperContentBikini2 = document.querySelector('#swiper-bikini2');
        swipperContentBikini2.innerHTML ='';
        swipperContentBikini2.innerHTML = nodeGenerator(bikinis);
        let swipperContentBikini3 = document.querySelector('#swiper-bikini3');
        swipperContentBikini3.innerHTML ='';
        swipperContentBikini3.innerHTML = nodeGenerator(bikinis);

        // Generamos slide Enterizas
        let swipperContentEnteriza = document.querySelector('#swiper-enteras');
        swipperContentEnteriza.innerHTML ='';
        swipperContentEnteriza.innerHTML = nodeGenerator(enterizas);
        let swipperContentEnteriza2 = document.querySelector('#swiper-enteras2');
        swipperContentEnteriza2.innerHTML ='';
        swipperContentEnteriza2.innerHTML = nodeGenerator(enterizas);
        let swipperContentEnteriza3 = document.querySelector('#swiper-enteras3');
        swipperContentEnteriza3.innerHTML ='';
        swipperContentEnteriza3.innerHTML = nodeGenerator(enterizas);

        // Generamos slide Comfys
        let swipperContentComfy = document.querySelector('#swiper-comfy');
        swipperContentComfy.innerHTML ='';
        swipperContentComfy.innerHTML = nodeGenerator(comfy);
        let swipperContentComfy2 = document.querySelector('#swiper-comfy2');
        swipperContentComfy2.innerHTML ='';
        swipperContentComfy2.innerHTML = nodeGenerator(comfy);
        let swipperContentComfy3 = document.querySelector('#swiper-comfy3');
        swipperContentComfy3.innerHTML ='';
        swipperContentComfy3.innerHTML = nodeGenerator(comfy);


        // let nodo = '';
        // bikinis.forEach(p => {
        //     nodo +=`
            
        //         <div class="swiper-slide">
        //             <div class="swiper-content">
        //             <img src="${p.image[0]}" class="d-block w-100" alt="">
        //                 <div class="slide-info">
        //                     <h4>AR$${p.price},00</h4>
        //                     <h5>${p.name}</h5>
        //                     <h6>${p.type}</h6>
        //                     <div class="link-ver-mas"><a href="/pages/detail.html?id=${p.id}">Ver más</a></div>
        //                 </div>
        //             </div>
        //         </div>
            
            
        //     `
        // });

        // swipperContent.innerHTML = nodo;   
        
    }

    function nodeGenerator(prods){
        let nodo = '';
        prods.forEach(p => {
            nodo +=`
            
                <div class="swiper-slide">
                    <div class="swiper-content">
                    <img src="${p.image[0]}" class="d-block w-100" alt="">
                        <div class="slide-info">
                            <h4>AR$${p.price},00</h4>
                            <h5>${p.name}</h5>
                            <h6>${p.type}</h6>
                            <div class="link-ver-mas"><a href="/pages/detail.html?id=${p.id}">Ver más</a></div>
                        </div>
                    </div>
                </div>
            
            
            `
        });

        return nodo;
    }