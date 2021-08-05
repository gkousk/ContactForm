function sendMail(params) {
    var tempParams ={
        name:document.getElementById("name").value,
        mail:document.getElementById("mail").value,
        message:document.getElementById("msg").value,
    };
    
    emailjs.send('service_yn8zqqj','template_n9g2r98',tempParams)
    .then(function(res){
        console.log("success",res.status);
    })
}