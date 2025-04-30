import React from "react";
import SidebarItem from "./sidebar_item";

function Sidebar({ username, image_user }) {
    return (
        <div>
            <div className="d-none d-xxl-block">
                <aside
                    className="d-flex flex-column text-white bg-navyBlue flex-shrink-0 p-3 shadow-lg position-fixed"
                    style={{ width: "20vw", height: "100vh" }}
                >
                    <a className="navbar-brand text-center" href="/" style={{ marginBottom: "1vw", marginTop: "1vw" }} >
                        <img src="/images/logo.png" alt="Logo" width="240" className="d-inline-block align-text-top" />
                    </a>

                    <hr />

                    <ul className="nav nav-pills flex-column mb-auto" style={{ marginTop: "1vw" }}>
                        <SidebarItem name="Home" icon="house-fill" route="/" />
                        <SidebarItem name="Contas Bancárias" icon="bank2" route="/" />
                        <SidebarItem name="Objetivos Financeiros" icon="bar-chart-fill" route="/" />
                        <SidebarItem name="Perfil Financeiro" icon="wallet-fill" route="/" />
                    </ul>

                    <hr />

                    <div className="dropdown-center mt-2 d-flex justify-content-center">
                        <a
                            href="#"
                            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                            id="dropdownUser1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img src={`/uploaded_images/${image_user}.jpg`} alt="Usuário" className="rounded-5 me-2" width="40" height="40" />
                            <strong className="nome">{username}</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li>
                                <a className="dropdown-item" href="minha_conta.php">
                                    Minha Conta
                                </a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item" href="logout.php">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <nav class="navbar p-3 d-block d-xxl-none navbar-dark bg-navyBlue shadow-lg fixed-top">
                <div class="container d-flex justify-content-center align-items-center">
                    <div class="col-4 text-start">
                        <a class="navbar-brand text-center" href="/">
                            <img src="/images/logo.png" alt="Logo" width="100" />
                        </a>
                    </div>
                    <div class="col-4 d-flex justify-content-center">
                        <div class="dropdown">
                            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={`/uploaded_images/${image_user}.jpg`} alt="Usuário" class="rounded-5 me-2" width="40" height="40" />
                                <strong class="nome">{username}</strong>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUserMobile">
                                <li><a class="dropdown-item" href="minha_conta.php">Minha Conta</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li><a class="dropdown-item" href="logout.php">Logout</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4 text-end">
                        <button class="btn border-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                            <i class="fs-3 text-white bi bi-list"></i>
                        </button>
                    </div>
                </div>
            </nav>
            <div class="offcanvas offcanvas-end text-bg-navyBlue" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="mobileMenuLabel">Menu</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="nav flex-column">
                        <SidebarItem name="Home" icon="house-fill" route="/" />
                        <SidebarItem name="Contas Bancárias" icon="bank2" route="/" />
                        <SidebarItem name="Objetivos Financeiros" icon="bar-chart-fill" route="/" />
                        <SidebarItem name="Perfil Financeiro" icon="wallet-fill" route="/" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;