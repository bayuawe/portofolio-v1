import React from "react";

const Footer = (props) => {
    return (
        <div data-section id="footer" className="group mt-32">
            <div className="text-surface-600">
                <div className="flex flex-row justify-between">
                    <span>{props.data.name} | {new Date().getFullYear()}</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
