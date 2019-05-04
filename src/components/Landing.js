import React, { useState } from 'react'
import HomeLanding from '../assets/images/home-landing.png'
import AboutLanding from '../assets/images/about-landing.png'
import ContactLanding from '../assets/images/contact-landing.png'
import WorksLanding from '../assets/images/works-landing.png'
import EmailLanding from '../assets/images/email-landing.png'

const Landing = () => {
  const [images, setImages ] = useState([
    { 
      imageUrl: <img style={styles.LandingStyle} src={HomeLanding}></img> 
    },
    { 
      imageUrl: <img style={styles.LandingStyle} src={AboutLanding}></img> 
    },
    { 
      imageUrl: <img style={styles.LandingStyle} src={WorksLanding}></img> 
    },
    { 
      imageUrl: <img style={styles.LandingStyle} src={ContactLanding}></img> 
    },
    { 
      imageUrl: <img style={styles.LandingStyle} src={EmailLanding}></img> 
    }
  ])

  return (
    <>
      {images.map( image => {
        return(
          <>
            {image.imageUrl}
          </>
        )
      })}
    </>
  )
}

const styles = {
  LandingStyle: {
    width: "100%",
    height: 'auto',
    padding: 0,
  }
};

export default Landing