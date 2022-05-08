let messageConfirmNL = document.querySelector('#mailOkNL');
    const form = document.querySelector('#formularioNL');
    form.addEventListener('submit', handleSubmit)

//Envio NL fetch
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
            messageConfirmNL.style.display = "block";
            console.log('ok');
            setTimeout(() => {
               messageConfirmNL.style.display = "none" 
               console.log('listp! bye');
               form.reset();
            }, 4500);
        }
        
    
    }
    
    
