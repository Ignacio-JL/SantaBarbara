fetch("/js/stock.json")
    .then((response) => response.json())
    .then((result) => {
        
        showFeatureProducts(result);
        
        
    })
    .catch((error) => console.log(error));

    function showFeatureProducts(prod){
        // filtramos por destacados
        let prodF = prod.filter(e => e.destacado === true)


        let swipperContent1 = document.querySelector('#swiper-content1');
        swipperContent1.innerHTML ='';

        let swipperContent2 = document.querySelector('#swiper-content2');
        swipperContent2.innerHTML ='';
        
        let nodo = '';
        prodF.forEach(p => {
            nodo +=`
            
                <div class="swiper-slide">
                    <div class="swiper-content">
                    <img src="${p.image[0]}" class="d-block w-100" alt="">
                        <div class="slide-info">
                            <h5>${p.name}</h5>
                            <h6>${p.type}</h6>
                            <div class="link-ver-mas"><a href="/pages/detail.html?id=${p.id}">Ver más</a></div>
                        </div>
                    </div>
                </div>
            
            
            `
        });
        
        swipperContent1.innerHTML = nodo;
        swipperContent2.innerHTML = nodo;
    }