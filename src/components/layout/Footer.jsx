import React from 'react';
import { AiFillInstagram, AiFillYoutube, AiFillGithub } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>BTECH BURGER WALA</h2>
                <p>We are trying to give you best taste possible.</p>

                <em>We give attention to genuine feedback.</em>
                <br />
                <br />
                <strong>All right recived. @btechburgerwala</strong>

            </div>
            <aside>
                <h4>Follow Us</h4>
                <a href="https://www.youtube.com/"><AiFillYoutube /></a>
                <a href="https://www.instagram.com/"><AiFillInstagram /></a>
                <a href="https://www.github.com/"> <AiFillGithub /></a>
            </aside>
        </footer>
    );
};

export default Footer;

