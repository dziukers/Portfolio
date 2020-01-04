import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HomeImg from '../Images/home.svg';

class Navbar extends Component {
  render() {
    const isMobile = window.innerWidth > 1000;
    return (
      <Navigation>
          <ul>
              <li><NavLink exact to='/'>{isMobile ? 'Home' : <i className='icon-home'></i>}</NavLink></li>
              <li><NavLink to='/about'>{isMobile ? 'About' : <i className='icon-about'></i>}</NavLink></li>
              <li><NavLink to='/skills'>{isMobile ? 'Skills' : <i className='icon-skills'></i>}</NavLink></li>
              <li><NavLink to='/projects'>{isMobile ? 'Projects' : <i className='icon-projects'></i>}</NavLink></li>
              <li><NavLink to='/contact'>{isMobile ? 'Contact' : <i className='icon-contact'></i>}</NavLink></li>
          </ul>
      </Navigation>
)
  }
}
const Navigation = styled.nav`
    font-family: "neontubes";
    display: flex;
    justify-content: center;
    z-index: 7;
  
   ul {
    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style-type: none;
    max-width:1200px;
    width:100%;

  }
   a{
    color:grey;
  }
   ul a:visited, a:link {
    text-decoration: none;
    text-decoration-style: none;
  }
    ul li {
    font-size:2em;
    display: block;
    padding:1em 0 2em 0;
    /* width:7em; */
  }
   ul li:hover a{
    cursor: pointer;
  }
  
  a:focus,a.active{
    color:white;
  }
  a.active{
    text-shadow:
    0 0 0 transparent,
    0 0 10px rgb(29, 167, 10),
    0 0 20px rgba(29, 167, 10,.5),
    0 0 40px rgba(29, 167, 10,1),
    0 0 100px rgba(29, 167, 10,1),
    0 0 200px rgba(29, 167, 10,1),
    0 0 300px rgba(29, 167, 10,1),
    0 0 500px rgba(29, 167, 10,1),
    0 10px 3px #000; 

      font-weight: 600;
      text-transform: uppercase;
  }   

  @media screen and (max-width: 1000px) {
    width:100%;
    ul {
      display:flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      padding:0;
    }
    ul li{
      padding:0.5em;
    }
  }
  @media screen and (max-width: 700px) {
    ul {
      font-size: 0.85em;
    }
  } 
  `;
export default Navbar;