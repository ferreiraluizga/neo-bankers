import React from "react";
import "../../assets/styles/login.css";
import TextField from "../global_components/form_components/text_field";

function Login() {
    return (
        <div className="w-100 vh-100 bg-light">
            <div className="d-flex flex-column flex-md-row h-100">
                
                {/* Imagem */}
                <div className="col-12 col-md-6 p-0">
                    <img
                        src="/images/login.png"
                        className="w-100"
                        style={{
                            objectFit: "cover",
                            height: "200px", // Altura menor no mobile
                        }}
                        alt="Login"
                    />
                </div>

                {/* Formulário */}
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center p-4 p-md-5">
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <h1 className="fw-semibold mb-2">Bem-vindo(a)!</h1>
                        <p className="text-muted mb-4">Faça o login para acessar sua conta</p>
                        <TextField label="E-Mail ou Usuário:" type="text" id="username" />
                        <TextField label="Senha:" type="password" id="password" />
                        <button className="btn btn-navyBlue rounded-pill mt-4 w-100">Entrar</button>
                        <p className="mt-3 text-center">
                            Não tem uma conta? <a href="/" className="link-navyBlue">Cadastre-se</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
