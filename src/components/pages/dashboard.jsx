import React from 'react';
import Sidebar from '../global_components/sidebar/sidebar';

function Dashboard() {
    return (
        <div>
            <Sidebar username="User" image_user="user1" />
            <div className='main-content p-5'>
                <div>
                    <h1 className='fw-semibold text-center text-lg-start'>Bem-Vindo de Volta, Usuário</h1>
                    <p className='text-center text-lg-start'>Seu saldo atual é de aproximadamente: R$ 00,00</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;