// nama function bebas //
// document.getElementById digunakan untuk mengambil tag yang sesuai dengan id yg tertera //
// element = tag //

function submitForm(){
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-msg').value
    
    if(name == ''){
        alert("Namanya Diisi Dulu Yaa")
    }

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(message)

    let receiverEmail = "pakBoss@gmail.com"

let a = document.createElement('a')

a.href = "mailto:" + receiverEmail + "?subject=" + subject + "&body=Halo Nama Saya " + name + ", " + message 

a.click()
}

