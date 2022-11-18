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

// checkbox mostra a senha
function mostrar(){
    var senha = document.getElementById('password')
    if(senha.type === "password"){
        senha.type = "text";
    }
    else {
        senha.type = "password"
    }
}


function validConfirma(){
    var senha = document.getElementById('password') 
    var senhaC = document.getElementById('passwordC') 
    var feedB = document.getElementById('feedback')
    var min = document.getElementById('min')
    var senhaTxt = document.getElementById('pass')

    if(senha.value.length >= 8 && senhaC.value.length >= 8){
            min.style.color = 'green'
            feedB.innerHTML = 'Feedback'
            if(senha.value != senhaC.value){
                feedB.innerHTML = 'As senhas não são iguais!'
                senhaTxt.style.color = 'red'
            }
            else{
                senhaTxt.style.color = 'green'
                feedB.innerHTML = '<center>Todos os requisitos da senha foram atendidos!'
            }
    }
    else{
        feedB.innerHTML = '<center>A senha precisa ter 8 caracteres ou mais!'
        min.style.color = 'red'
    }
    


}

function validarEmail(){
    //pega o valor pelo id
    var email = document.getElementById("email");
    var feedB = document.getElementById('feedback')

    if(email.value == ""){
        feedB.innerHTML = 'Insira um email!'
    }
    else{
        feedB.innerHTML = 'Feedback'
    }

}