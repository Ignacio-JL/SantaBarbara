const url = "/js/stock.json";

// Carga el array con los productos

fetch(url)
    .then((response) => response.json())
    .then((result) => {
        let paramaterId = new URLSearchParams(window.location.search);
        let productId = paramaterId.get('id');
        let product = result.find(p => p.id === parseInt(productId));
        showDetail(product);
        showMoreProducts(result);
        
    })
    .catch((error) => console.log(error));



    function showDetail(product){
        let imagesProduct ='';
        let count = 0;
        product.image.forEach(element => {
            count++;
            imagesProduct += `
            <div class="detail-images-container">
                <button id="selection-${count}"><img src="${element}" alt=""></button>
            </div>
            `
            
        });
        // constructor(id, image, season, size, name, type, price, description)
        document.querySelector('#container-detail').innerHTML = `
            <div class="detail-grid">
                <div class="detail-image">
                    <img id="image-main" src="${product.image[0]}" alt="">
                </div>
        
                <div class="detail-info">
                    
                    <h6>${product.type}</h6>
                    <h2>${product.name}</h2>
                    <h3>AR$ ${product.price},00</h3>
                    <p class="w-50">${product.description}</p>
                    <div>
                        <img src="/assets/ola.png" class="w-100" alt="ola">
                    </div>
                    
                </div>
        
                <div class="detail-images">
                    ${imagesProduct}
                    
                </div>
                <div class="detail-button">
                    <button>Continuar</button>
                </div>
        
            </div>
        `;
        
        for (let i = 1; i <= count; i++) {
            document.getElementById('selection-' + i).style.border='none'
            document.getElementById(`selection-${i}`).onclick = ()=>{
                // document.getElementById('selection-' + i).style.border = '3px solid #FE336D'
                if(i==1){
                    document.getElementById('selection-1').style.border = '3px solid #FE336D'
                    document.getElementById('selection-2').style.border= 'none'
                    if(count==3){
                        document.getElementById('selection-3').style.border= 'none'
                    }
                    document.getElementById('image-main').src=`${product.image[0]}`
                }
                if(i==2){
                    document.getElementById('selection-2').style.border = '3px solid #FE336D'
                    document.getElementById('selection-1').style.border= 'none'
                    if(count==3){
                        document.getElementById('selection-3').style.border= 'none'
                    }
                    document.getElementById('image-main').src=`${product.image[1]}`
                }
                if(count==3 && i==3){
                    document.getElementById('selection-3').style.border = '3px solid #FE336D'
                    document.getElementById('selection-1').style.border= 'none'
                    document.getElementById('selection-2').style.border= 'none'
                    document.getElementById('image-main').src=`${product.image[2]}`
                }
            };
            
        }
        
        document.getElementById('selection-1').style.border = '3px solid #FE336D'
    }

    function showMoreProducts(prod){
        // Generamos orden aleatorio
        prod.sort(()=>{return Math.random()-0.5});

        let swipperContent = document.querySelector('#swiper-content');
        swipperContent.innerHTML ='';
        let nodo = '';
        prod.forEach(p => {
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

        swipperContent.innerHTML = nodo;   
    }