import React from 'react';


const styles = {
    
    title: {
        textAlign: 'center', 
        fontFamily: 'Tahoma, Verdana, sans-serif',
        marginTop: 20, 
        background: 'black', 
        fontSize: '30px', 
        align: 'center', 
        color: 'white', 
    }, 

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
        marginTop: '10px', 
        fontSize: '20px', 
        color: 'white', 
      }
  };


function Resume() {
    return (
    <>
    <section style={styles.content}>
        <div style={styles.subtitle}> Education </div>
        <div style={styles.content}> 
        Univeristy of Denver - Full Stack

    </div>
    </section>
    </>
    ); 
}; 


export default Resume; 