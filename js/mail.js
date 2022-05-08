let messageConfirm = document.querySelector('#mailOk');
    const form = document.querySelector('#formulario');
    form.addEventListener('submit', handleSubmit);

//Envio Mail fetch
async function handleSubmit(event){
    event.preventDefault();
    
        const miForm = new FormData(this);
        const response = await fetch("https://formsubmit.co/joseignacio439@gmail.com", {
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
               form.reset();
            }, 4500);
        }
        
    
    }
    
    
