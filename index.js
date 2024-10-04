emailjs.init('pTJ_3uduc2tgAkk67');
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    //Código para obtener los valores del form

    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const message = document.getElementById('message').value;

    emailjs.send('service_lmfi90w', 'template_143ao5j',{
        to_name: "Recipient Name",
        user_name: name,
        user_email: email,
        message: message,
    })
    .then(function(response){
        iziToast.show({
            message: 'Tu mensaje fue enviado correctamente!',
            position: 'topLeft',
            color: 'green',
        })
    }), function(error) {
        iziToast.show({
            message: 'Hubo un error al enviar el mensaje',
            position: 'topLeft',
            color: 'red',
        })
    }
})