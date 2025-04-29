import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../banner_title/banner_title.css";

function BannerTitle({ title, image }) {
    return (
        <div className="banner d-flex justify-content-start align-items-end p-4 mb-5 shadow-lg" style={{ backgroundImage: `url(${image})` }}>
            <div className="container">
                <h1 className="fw-semibold text-white display-4">{title}</h1>
            </div>
        </div>
    )
}

export default BannerTitle;