document.getElementById("myForm").addEventListener("submit",
function(event){
    event.preventDefault()
    validate()
})

function validate() {

    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message")
    error_message.style.padding = "11px"

    let errors = [];

    // form validations
    if(name.length<=2) {
        errors.push("name must be more than 2 characters")
    }
    if(subject.length<7) {
        errors.push("subject must be more than 7 characters")
    }
    if(phone.length<10) {
        errors.push("phone number must be more than 10 characters ")
    }
    if(email.length<6 || email.indexOf("@")== -1) {
        errors.push("please enter a valid email")

    }
    if(message.length<20) {
        errors.push("please enter more than 20 characters of message")
    }
    if(errors.length>0){
        error_message.innerHTML=errors.join("<br>");
        console.log(errors)

        return false;
    } else {
        alert("form submitted succesfully");
        return true
    }


}
