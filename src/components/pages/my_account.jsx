import React from "react";
import Sidebar from "../global_components/sidebar/sidebar";
import BannerTitle from "../global_components/banner_title/banner_title";
import PersonalInfo from "../my_account/personal_info";
import BankInfo from "../my_account/bank_info";
import UserImage from "../my_account/user_image";

function MyAccount({ username, image }) {
    return (
        <div>
            <Sidebar username="User" image_user="user1" />
            <div className="main-content">
                <BannerTitle title={username} image="/images/account_banner.png" />
                <div className="container px-xxl-4 mb-5">
                    <div className="row">
                        <div className="col-12 col-md-4 order-1 order-md-2 mb-4 mb-md-0">
                            <UserImage image={image} />
                        </div>
                        <div className="col-12 col-md-8 order-2 order-md-1">
                            <PersonalInfo />
                            <BankInfo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyAccount;
