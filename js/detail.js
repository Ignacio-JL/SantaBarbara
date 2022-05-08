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
                <div class="detail-images inMobile">
                    ${imagesProduct}
                    
                </div>
        
                <div class="detail-info">
                    <div class="detail-header-info">
                        <h6>${product.type}</h6>
                        <div class="redes-down">
                            <a href="#"><img src="/assets/whats.png"></a>
                            <a href="#"><img src="/assets/insta.png"></a>
                            <a href="#"><img src="/assets/face.png"></a>
                        </div>

                    </div>

                    <h2>${product.name}</h2>
                    <h3>AR$ ${product.price},00</h3>
                    <p>${product.description}</p>
                    <hr>
                    <h6>Talles disponibles</h6>
                    <div class="talles">
                    ${sizeGenerator(product.size)}
                        <span class="tablaTalles">Tabla de talles</span>
                    </div>
                    <div class="btn-modals-detail">

                      <button type="button" class="btn border-0" data-bs-toggle="modal" data-bs-target="#modalCuidados">
                        <img src="../assets/take-care.png" alt="" class="slide-img w-25 h-25 m-auto">
                      </button>
    
                      <button type="button" class="btn border-0" data-bs-toggle="modal" data-bs-target="#modalEnvios">
                        <img src="../assets/truck-fast.png" alt="" class="slide-img w-25 h-25 m-auto">
                      </button>
    
                      <button type="button" class="btn border-0" data-bs-toggle="modal" data-bs-target="#modalPagos">
                        <img src="../assets/dollar-circle.png" alt="" class="slide-img w-25 h-25 m-auto">
                      </button>
    
                      <button type="button" class="btn border-0" data-bs-toggle="modal" data-bs-target="#modalCambios"> 
                        <img src="../assets/box-pack.png" alt="" class="slide-img w-25 h-25 m-auto">
                      </button>
    
                      
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

        let swipperContent1 = document.querySelector('#swiper-content1');
        swipperContent1.innerHTML ='';
        let swipperContent2 = document.querySelector('#swiper-content2');
        swipperContent2.innerHTML ='';
        let swipperContent3 = document.querySelector('#swiper-content3');
        swipperContent3.innerHTML ='';
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

        swipperContent1.innerHTML = nodo;
        swipperContent2.innerHTML = nodo; 
        swipperContent3.innerHTML = nodo; 
    }

    function sizeGenerator(sizes){
        let response = "";
        if(sizes == "Único"){
            return "<span>Talle único</span>"
        }
        else{
            for(let i = 1; i<=3; i++){
                if(sizes.includes(i)){
                    response += `<span>${i}</span>`
                }
                else{
                    response += `<span class="disable">${i}</span>`
                }
            }
        }

        return response;
        
    }
