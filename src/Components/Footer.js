import React from 'react';

const styles = {

  content: {
    color: 'white', 
    position: 'absolute',
    bottom: '80px', 
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