import React from 'react'
import Landing from './../components/Landing'
import HomeLanding from '../assets/images/home-landing.png'
import ScrollLock from 'react-scrolllock'

class Home extends React.Component {
  state = {
    lockScroll: true
  }

  render() {
    return(
      <>
        <img style={styles.LandingStyle} src={HomeLanding}></img>
        <ScrollLock isActive={this.state.lockScroll} />
      </>
    )
  }
  }

  const styles = {
    LandingStyle: {
      width: "100%",
      height: '100%',
      padding: 0,
    }
  };

export default Home