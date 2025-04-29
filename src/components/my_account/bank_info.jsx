import React from "react";
import TextField from "../global_components/form_components/text_field";

function BankInfo() {
    return (
        <div className="card bg-backgroundWhite rounded-5 p-4 border-0 shadow-lg mb-4">
            <div className="row">
                <h3 className="fw-semibold text-navyBlue mb-3">Alterar Informações Bancárias</h3>
                <div className="col-12">
                    <TextField label="Banco" type="text" id="banco" placeholder="Digite seu Banco" value="" />
                </div>
                <div className="col-12">
                    <TextField label="Renda" type="text" id="renda" placeholder="Digite sua Renda" value="" />
                </div>
                <div className="col-12">
                    <TextField label="Variabilidade de Renda" type="text" id="variabilidade" placeholder="Digite sua Variabilidade de Renda" value="" />
                </div>
                <div className="col-12">
                    <button className="btn btn-navyBlue rounded-pill">Salvar Informações</button>
                </div>
            </div>
        </div>
    );
}

export default BankInfo;