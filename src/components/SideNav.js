import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SideNav = () => {
  const [ paths, setPaths ] = useState('/')
  const [ aboutShow, setAbout ] = useState(false)
  const [ worksShow, setWorks ] = useState(false)
  const [ contactShow, setContact ] = useState(false)

 const about = () => {
  if (worksShow !== false) {
    setWorks(false)
    setAbout(!aboutShow)
   } else if (contactShow !== false) {
     setContact(false)
     setAbout(!aboutShow)
   } else {
     setAbout(!aboutShow)
   }
 }
 const works = () => {
   if (aboutShow !== false) {
    setAbout(false)
    setWorks(!worksShow)
   } else if (contactShow !== false) {
     setContact(false)
     setWorks(!worksShow)
   } else {
     setWorks(!worksShow)
   }
 }

 const contact = () => {
  if (aboutShow !== false) {
    setAbout(false)
    setContact(!contactShow)
   } else if (worksShow !== false) {
     setWorks(false)
     setContact(!contactShow)
   } else {
     setContact(!contactShow)
   }
 }
  // if clicked change the state of the name and path, otherwise reset state

  
  return(
    <div style={{ postion: 'absolute', transformOrigin: '0em 1em',
    transform: 'rotate(90deg)', marginLeft: '90%', width: '100%', display: 'flex', justifyContent: 'left'}}>
      <Link
        to={ !aboutShow ? "/About" : "/"}
        onClick={() => about()}
      >
        <button
            type="button"
          >
          { !aboutShow ? 'About' : 'Home' }
        </button>
      </Link>
      <Link
        to={ !worksShow ? "/Works" : "/"}
        onClick={() => works()}
      >
        <button
            type="button"
          >
          { !worksShow ? 'Works' : 'Home' }
        </button>
      </Link>
      <Link
        to={ !contactShow ? "/Contact" : "/"}
        onClick={() => contact()}
      >
        <button
            type="button"
          >
          { !contactShow ? 'Contact' : 'Home' }
        </button>
      </Link>
  </div>
  )
}


export default SideNav