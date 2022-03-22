import { LinkRounded } from '@material-ui/icons'
import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    if(toggle){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }else{
      linksContainerRef.current.style.height = "0px"
    }
  },[toggle])

  return <nav>
    <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={()=> setToggle(!toggle)}>
            <FaBars/>
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
          {/* <div className={`${toggle?"links-container show-container":"links-container"}`}> */}
            <ul className="links" ref={linksRef}>
                {
                  links.map((link)=>{
                    const {id,url,text} = link
                    return(
                    <>
                      <li key={id}>
                        <a href={url}>{text}</a>
                      </li>
                    </>
                    )
                  })
                }
              </ul>
            </div>
          {/* {   //conditional rendering !! 
            toggle && (<div className="links-container show-container">
            <ul className="links">
                {
                  links.map((link)=>{
                    const {id,url,text} = link
                    return(
                    <>
                      <li key={id}>
                        <a href={url}>{text}</a>
                      </li>
                    </>
                    )
                  })
                }
              </ul>
            </div>)
          } */}
        
        <ul className="social-icons">
            {
              social.map((socIcon)=>{
                const {id,url,icon} = socIcon
                return (
                <>
                <li key={id}>
              <a href={url}>
                {icon}
                </a>
            </li>
                </>
                )
              })
            }
            
          </ul>
      </div>
    
    </nav>
}

export default Navbar
