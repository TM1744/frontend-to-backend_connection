var body = document.querySelector("body")
var singInButton = document.querySelector("#singIn")
var singUpButton = document.querySelector("#singUp")
var url = "http://localhost:5016"


body.onload = function()
{
    body.className = "on-load"
}

singInButton.addEventListener("click", function()
{
    body.className = "sing-in"
});

singUpButton.addEventListener("click", function() {
    body.className = "sing-up"
})

document.addEventListener("DOMContentLoaded", () => {
    const registerButton = document.querySelector("#register");
    const accessButton = document.querySelector("#access");

    if (registerButton){
        registerButton.addEventListener("click", formularioCadastrarUsuario);
    }

    if (accessButton) {
        registerButton.addEventListener("click", formularioAcessar);
    }
});

const formularioCadastrarUsuario = async () => {
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#senha").value;
    const confirmedPassword = document.querySelector("#confirmarSenha").value;

    if (email === "") {
        alert("Email obrigatório");
        return;
    }

    if (password === "") {
        alert("Senha obrigatória");
        return;
    }

    if (confirmedPassword === "") {
        alert("Confirmação de senha é obrigatório");
        return;
    }

    try {
        let dto = JSON.stringify({
            email,
            password,
            confirmedPassword
        });

        const response = await fetch(url + "/Singup", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: dto
        });

        if (!response.ok) {
            alert('Erro ao cadastrar usuário')
            return;
        }

        alert('Sucesso ao cadastrar usuário');

        //redirecionador para a tela principal do sistema
    } catch (error) {
        alert('Erro ao cadastrar usuário')
        console.error(error.message);
    }

    const formularioCadastrarUsuario = async () => {
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#senha").value;
        const confirmedPassword = document.querySelector("#confirmarSenha").value;
    
        if (email === "") {
            alert("Email obrigatório");
            return;
        }
    
        if (password === "") {
            alert("Senha obrigatória");
            return;
        }
    
    
        try {
            let dto = JSON.stringify({
                email,
                password,
                confirmedPassword
            });
    
            const response = await fetch(url + "/Singin", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: dto
            });
    
            if (!response.ok) {
                alert('Erro ao cadastrar usuário')
                return;
            }
    
            alert('Sucesso ao cadastrar usuário');
    
            //redirecionador para a tela principal do sistema
        } catch (error) {
            alert('Erro ao cadastrar usuário')
            console.error(error.message);
        }
}