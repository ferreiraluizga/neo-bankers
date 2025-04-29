import React from "react";

function SidebarItem({ name, icon, route }) {
    return (
        <div>
            <li className="nav-item">
                <a href={route} className="nav-link text-white">
                    <i className={`bi bi-${icon} me-2`}></i>
                    {name}
                </a>
            </li>
        </div>
    )
}

export default SidebarItem;