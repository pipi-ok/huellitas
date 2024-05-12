let btnTransit = document.querySelector("#reg-btn-transit");


 btnTransit.addEventListener('click', function(){
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    let birthdate = document.querySelector("#birthdate");
    let zone = document.querySelector("#zona");
 
    if(firstname.value.trim()==''){
       let errorfirstname = document.querySelector("#error-firstname");
       errorfirstname.innerHTML = 'Debes completar el campo Nombre';
    };
 
    if(lastname.value.trim()==''){
       let errorlastname = document.querySelector("#error-lastname");
       errorlastname.innerHTML = 'Debes completar el campo Apellido';
    };
 
    if(email.value.trim() == ''){
       let erroremail = document.querySelector("#error-email");
       erroremail.innerHTML = 'Debes completar el campo Email';
    };

    if(phone.value.trim() == ''){
        let errorphone = document.querySelector("#error-phone");
        errorphone.innerHTML = 'Debes completar el campo Teléfono';
     };
     
  });

