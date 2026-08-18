
function sendMail(){
let mes = {
name : document.getElementById("name").value,
subject : document.getElementById("subject").value,
message : document.getElementById("message").value
}
    emailjs.send("service_2go8xve","template_aa31quv",mes)
    .then(function(){
  alert("Email send");

    })

    .catch(function(){
        // console.log(error);
        alert("error");
    });     
}
