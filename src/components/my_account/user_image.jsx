import React from "react";

function UserImage({ image }) {
    return (
        <div className="text-center">
            <div className="position-relative d-inline-block" style={{ width: "200px", height: "200px" }}>
                <img
                    src={`/uploaded_images/${image}.jpg`}
                    alt="Profile picture"
                    className="rounded-circle img-fluid border border-2 w-100 h-100 object-fit-cover"
                />
                <div
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-circle d-flex justify-content-center align-items-center"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        opacity: 0,
                        transition: "opacity 0.3s",
                        cursor: "pointer"
                    }}
                    onClick={() => {
                        const modal = new bootstrap.Modal(document.getElementById('alterarImagemModal'));
                        modal.show();
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = 1)}
                    onMouseLeave={e => (e.currentTarget.style.opacity = 0)}
                >
                    <i className="bi bi-camera" style={{ fontSize: "2rem" }}></i>
                </div>
            </div>

            <div className="row mt-3">
                <a href="/" className="link-navyBlue">Alterar Usuário e Senha</a>
            </div>
            <div className="row mt-3">
                <a href="/" className="link-navyBlue">Sair da Conta</a>
            </div>
        </div>
    );
}

export default UserImage;
