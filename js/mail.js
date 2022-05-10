let messageConfirm = document.querySelector('#mailOk');
    const formC = document.querySelector('#formulario');
    formC.addEventListener('submit', handleSubmit);

//Envio Mail fetch
async function handleSubmit(event){
    event.preventDefault();
    
        const miForm = new FormData(this);
        const response = await fetch("https://formsubmit.co/dilasciobarbara@gmail.com", {
            method: "POST",
            body: miForm,
            headers: {
                'Accept': 'application/json'
            }
        });
        if(response.ok){
            messageConfirm.style.display = "block";
            setTimeout(() => {
               messageConfirm.style.display = "none" 
               formC.reset();
            }, 4500);
        }
        
    
    }
    
    
