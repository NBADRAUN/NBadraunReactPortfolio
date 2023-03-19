import React from 'react';
import NickImage from "./Badraun2.JPG"; 


const styles = {
    
    subtitle: {
        textAlign: 'center', 
        fontFamily: 'Tahoma, Verdana, sans-serif',
        background: 'black', 
        marginTop: '50px', 
        fontSize: '30px', 
        color: 'white', 
    }, 
        
    content: {
        textAlign: 'center', 
        fontFamily: 'Tahoma, Verdana, sans-serif',
        background: 'black', 
        margin: '30px', 
        fontSize: '20px', 
        color: 'white', 
      },
    picture: {
        marginTop: '20px', 
        width: '30%', 
        height: '30%', 
    }
  };


function About() {
    return (
    <>
    <section style={styles.subtitle}>
        <div style={styles.subtitle}> About Me </div>
        <img style={styles.picture} src={NickImage} alt="Nick" />
        <div style={styles.content}> 
        Hello.  My Name is Nick Badraun. I am a student at University of Denver.  I am completing my full stack web development certification.  This journey has been long and hard, but a great begining to really understanding full stack.  

    </div>
    </section>
    </>
    ); 
}; 

export default About; 