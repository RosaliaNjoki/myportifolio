import React from 'react';

const Footer = ()=>{
    return(
        <footer>
            <p>©{new Date().getFullYear()} Rosalia Noki Wanjohi </p>
            <ul>
                <li><a href = "https://github.com/RosaliaNjoki" target="_blank" rel="noopener noreferrer">GitHub</a></li> 
                <li><a href = "https://linkedin.com/rosalia-wanjohi" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </footer>
        

    );
};
export default Footer;