import React from 'react';
import { FaHeart } from "react-icons/fa"

const styles = {

  content: {
    color: 'white', 
    position: 'fixed',
    bottom: '0%', 
    width: '100%', 
    fontSize: '12px', 
    
    }, 
    li: {
      color: "lightblue",
    }
};


function Footer() {
     return (
      <>
          <section className='footer' style={styles.content}>
        <div>
        Made with  
        <FaHeart style={{color: 'red', fontSize: '10px'}}/>
        by Nick Badraun
        </div>
        <div>
        <a style={styles.li} href={ "https://www.linkedin.com/in/nickbadraun" } rel="noreferrer" target="_blank">LinkedIn Profile</a>
        </div>
        <div>
        <a style={styles.li} href={ "https://github.com/NBADRAUN" } rel="noreferrer" target="_blank">GitHub</a>
        </div>
      </section>
      </>
    );
    }



export default Footer; 