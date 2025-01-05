import React from 'react';

const Footer = ()=>{
    return(
        <footer>
            <p>©{new Date().getFullYear()} Rosalia Njoki Wanjohi </p>
            <ul>
                <li><a href = "https://github.com/RosaliaNjoki" target="_blank" rel="noopener noreferrer">GitHub</a></li> 
                <li><a href = "https://linkedin.com/in/rosalia-wanjohi-099482166" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </footer>
        

    );
};
export default Footer;