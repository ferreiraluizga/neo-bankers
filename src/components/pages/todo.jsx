import React from "react";
import Sidebar from '../global_components/sidebar/sidebar';
import BannerTitle from "../global_components/banner_title/banner_title";

function ToDo() {
    return (
        <div>
            <Sidebar username="User" image_user="user1" />
            <div className='main-content'>
                <BannerTitle title="Objetivos Financeiros" image="/images/todo_banner.png" />
                <div className="container px-xxl-5"></div>
            </div>
        </div>
    );
}

export default ToDo;