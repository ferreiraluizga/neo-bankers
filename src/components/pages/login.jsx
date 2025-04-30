import React from "react";
import "../../assets/styles/login.css";
import TextField from "../global_components/form_components/text_field";

function Login() {
    return (
        <div className="bg-logo d-flex flex-column flex-sm-row vh-100 w-100 m-0">
            <div className="d-flex flex-column justify-content-center align-items-center flex-fill p-4 text-white">
                <div style={{ maxWidth: "400px", width: "100%" }}>
                    <h1 className="fw-semibold mb-2">Bem-vindo(a)!</h1>
                    <p className="mb-4">Faça o login para acessar sua conta</p>
                    <TextField label="E-Mail ou Usuário:" type="text" id="username" />
                    <TextField label="Senha:" type="password" id="password" />
                    <button className="btn btn-tealBlue rounded-pill mt-4 w-100">Entrar</button>
                    <p className="mt-3 text-center">
                        Não tem uma conta? <a href="/" className="link-light">Cadastre-se</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
