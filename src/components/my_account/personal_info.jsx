import React from "react";
import TextField from "../global_components/form_components/text_field";

function PersonalInfo() {
    return (
        <div className="card bg-backgroundWhite rounded-5 p-4 border-0 shadow-lg mb-4">
            <h3 className="fw-semibold text-navyBlue mb-3">Alterar Informações da Conta</h3>
            <div className="row g-3">
                <div className="col-12 col-lg-8">
                    <TextField label="Nome" type="text" id="nome" placeholder="Digite seu nome" value="" />
                </div>
                <div className="col-12 col-lg-4">
                    <TextField label="Data de Nascimento" type="date" id="nascimento" value="" />
                </div>
                <div className="col-12 col-lg-6">
                    <TextField label="CPF" type="text" id="cpf" placeholder="Digite seu CPF" value="" />
                </div>
                <div className="col-12 col-lg-6">
                    <TextField label="RG" type="text" id="rg" placeholder="Digite seu RG" value="" />
                </div>
                <div className="col-12 col-lg-8">
                    <TextField label="Endereço" type="text" id="endereco" placeholder="Digite seu Endereço" value="" />
                </div>
                <div className="col-12 col-lg-4">
                    <TextField label="Complemento" type="text" id="complemento" placeholder="" value="" />
                </div>
                <div className="col-12 col-lg-6">
                    <TextField label="E-Mail" type="text" id="email" placeholder="Digite seu E-Mail" value="" />
                </div>
                <div className="col-12 col-lg-6">
                    <TextField label="Telefone" type="text" id="telefone" placeholder="Digite seu Telefone" value="" />
                </div>
                <div className="col-12">
                    <button className="btn btn-navyBlue rounded-pill">Salvar Informações</button>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;