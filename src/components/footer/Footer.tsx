import styles from './Footer.module.css';
import { FaFacebook } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from '../../../src/assets/icons/Logo.png';
import GoogleImage from '../../../src/assets/icons/google-page-speed 1.png';


export function Footer() {
    return (
        <footer className={styles.footerConatiner}>
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <img src={Logo} alt="Logo" className={styles.logo} />
                    <span>Lorem Ipsum is simply dummy text of the<br /> printing and typesetting industry.</span>
                    <img src={GoogleImage} alt="google image" className={styles.google} />
                </div>
                <div className={styles.middleContainer}>
                    <span>Links</span>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Case Studies</p>
                    <p>How it works</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Area we Serve</p>
                </div>
                <div className={styles.midleContent}>
                    <span>Contact us</span>
                    <p>
                        Lorem Ipsum is simply dummy text<br />of the printing and typesetting<br />industry.
                    </p>
                    <span className={styles.number}>+943558106</span>
                </div>
                <div className={styles.rightContainer}>
                    <FaFacebook className={styles.social} />
                    <FaInstagram className={styles.social} />
                    <FaGithub className={styles.social} />
                    <FaLinkedin className={styles.social} />
                </div>
            </div>
            <hr></hr>
            <span className={styles.copyRigth}>© 2023 Copyright by Yhanko. All rights reserved.</span>
        </footer>
    )
}