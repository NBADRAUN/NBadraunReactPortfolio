import React from "react";
import Data from "../portfolioData.json";


const styles = {
  body: {
    textAlign: "center",
    fontFamily: "Tahoma, Verdana, sans-serif",
    background: "black",
    margin: "50px",
    fontSize: "20px",
    color: "white",

  },
  image: {
    width: "30%", 
  },
  li: {
    color: "white",
  }
};


function Portfolio() {


  return (
    <>
    <div style={styles.body}>
    { Data.map(post => {
          return(
        <div style={styles.body} key={ post.id }>
            <h3>{ post.projectname}</h3> 
            <div><img style={styles.image} src={post.image} alt={post.imagealttext}></img></div>
            <a style={styles.li} href={ post.url } rel="noreferrer" target="_blank">Click to View</a>
        </div>
            )
        })}
    </div>

</>
  )
      }

export default Portfolio;
