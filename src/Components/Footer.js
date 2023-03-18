import React from 'react';

const styles = {
  //  subtitle: {
  //     fontStyle: 'normal', 
  //     fontFamily: 'Tahoma, Verdana, sans-serif',
  //     fontSize: '25px', 
  //     margin: 'auto', 
  //     position: 'relative', 
  //     color: 'white', 
  //     width: 'auto', 
  //     textAlign: 'center', 
  // }, 
  content: {
    color: 'white', 
    position: 'absolute',
    bottom: '10px', 
    width: '100%', 
    
    }
};

function Footer() {
     return (
      <>
          <section className='footer' style={styles.content}>
        Made with Love by Nick Badraun
      </section>
      </>
    );
    }



export default Footer; 