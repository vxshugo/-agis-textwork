import React from "react";
import {BsGithub, BsInstagram } from "react-icons/bs";
import {FaTelegram} from "react-icons/fa";

const SocialMedia = () => {
    return(
        <div className="app__social">
            <a href="https://github.com/vxshugo" target="_blank">
                <div>
                    <BsGithub/>
                </div>
            </a>
            <a href="https://www.instagram.com/vxshugo/" target="_blank">
                <div>
                    <BsInstagram/>
                </div>
            </a>
            <a href="https://t.me/vxshugo/" target="_blank">
                <div>
                    <FaTelegram/>
                </div>
            </a>
        </div>
    )
}

export default SocialMedia