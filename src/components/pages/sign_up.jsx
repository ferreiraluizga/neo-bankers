import React from "react";
import TextField from "../global_components/form_components/text_field";

function SignUp() {
    return (
        <div className="bg-logo d-flex flex-column flex-sm-row vh-100 w-100 m-0">
            <div className="d-flex flex-column align-items-center flex-fill p-4 text-white overflow-auto">
                <div className="container">
                    <h1 className="fw-semibold mb-2">Bem-vindo(a)!</h1>
                    <p className="mb-4">Crie sua conta para entrar na plataforma</p>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-8">
                            <TextField label="Nome" type="text" id="nome" placeholder="Digite seu nome" value="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <TextField label="Data de Nascimento" type="date" id="nascimento" value="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <TextField label="CPF" type="text" id="cpf" placeholder="Digite seu CPF" value="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <TextField label="RG" type="text" id="rg" placeholder="Digite seu RG" value="" />
                        </div>
                        <div className="col-12 col-md-12 col-lg-4">
                            <TextField label="Banco" type="text" id="endereco" placeholder="Digite seu Banco" value="" />
                        </div>
                        <div className="col-12 col-lg-8">
                            <TextField label="Endereço" type="text" id="endereco" placeholder="Digite seu Endereço" value="" />
                        </div>
                        <div className="col-12 col-lg-4">
                            <TextField label="Complemento" type="text" id="complemento" placeholder="" value="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <TextField label="Renda" type="text" id="renda" placeholder="Digite sua Renda Mensal" value="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <TextField label="Variabilidade de Renda" type="text" id="varialibilidade" placeholder="Digite sua Variabilidade de Renda" value="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <TextField label="E-Mail" type="text" id="email" placeholder="Digite seu E-Mail" value="" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <TextField label="Telefone" type="text" id="telefone" placeholder="Digite seu Telefone" value="" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <TextField label="Senha" type="passwrord" id="senha" placeholder="Crie uma Senha" value="" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <TextField label="Confirme Sua Senha" type="passwrord" id="confirmarSenha" placeholder="" value="" />
                        </div>
                        <div className="col-12">
                            <button className="btn btn-tealBlue rounded-pill mt-4 w-100">Cadastrar</button>
                        </div>
                        <p className="mt-3 text-center">
                            Já possui uma conta? <a href="/" className="link-light">Entre</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;