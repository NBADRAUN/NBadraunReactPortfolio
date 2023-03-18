import React from 'react';
import ParticlesBg from 'particles-bg'

const styles = {
    name: {
        fontStyle: 'normal', 
        fontFamily: 'Tahoma, Verdana, sans-serif',
        fontSize: '40px', 
        margin: 'auto', 
        marginTop: 200, 
        position: 'relative', 
        color: 'white', 
        width: 300, 
        textAlign: 'center', 
    }, 
    subtitle: {
        fontStyle: 'normal', 
        fontFamily: 'Tahoma, Verdana, sans-serif',
        fontSize: '25px', 
        margin: 'auto', 
        position: 'relative', 
        color: 'white', 
        width: 'auto', 
        textAlign: 'center', 
    }, 
    content: {
      }
  };



function Home() {
    return (
    <>
        <section className='section'>
        <ParticlesBg type='lines' bg={true} />
        </section>
    <section style={styles.name}>
        Nick Badraun 
    </section>
    <section style={styles.subtitle}>
        Full Stack Web Development
    </section>

    </>
    ); 
}; 

export default Home; 