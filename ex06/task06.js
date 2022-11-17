function validSenha(){
    var lower = document.getElementById('lower')
    var upper = document.getElementById('upper')
    var num = document.getElementById('number')

    if(password.value.match(/[0-9]/)){
        num.style.color = 'green'
        if(password.value.match(/[A-Z]/)){
            upper.style.color = 'green'            
            if(password.value.match(/[a-z]/)){
                lower.style.color = 'green'                
            }
            else{
                lower.style.color = 'red'
            }
        }
        else{
            upper.style.color = 'red'
        }        
    }
    else{        
        num.style.color = 'red'
    }
}

function validConfirma(){
    var senha = document.getElementById('password') 
    var senhaC = document.getElementById('passwordC') 
    var feedB = document.getElementById('feedback')

    if(senha != senhaC){
        feedB.innerHTML = 'Senha Incorreta!'
    }
}

function validar(){
    //pega o valor pelo id
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var passwordC = document.getElementById("passwordC");
    var feedB = document.getElementById('feedback')

    //verifica os campos
    if(email.value == ""){
        ("O email não foi preenchido!");
    }
    else if(password.value == ""){
        alert("A senha não foi preenchida!")
    }
    else if(passwordC.value == ""){
        alert("A confirmação de senha não foi preenchida!")
    }
    else{

    }

}