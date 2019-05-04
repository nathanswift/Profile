import React from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const Links = () => {
  return(
    <div style={{ transformOrigin: '0 0',
    transform: 'rotate(45deg)'}}>
      <a href="https://github.com/nathanswift" >
        <Icon size="large" name="github"/>
      </a>
      <a href="https://www.linkedin.com/in/nathan-swift-290684182/">
        <Icon size="large" name="linkedin"/>
      </a>
      <a href="https://www.instagram.com/thenateswift/">
      <Icon size="large" name="instagram"/>
      </a>
      <a href="https://www.facebook.com/nathan.swift.940">
        <Icon size="large" name="facebook f"/>
      </a>
    </div>
  )
}


export default Links