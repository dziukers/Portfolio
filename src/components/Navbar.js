import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    return (
            <Navigation>
                <ul>
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/projects'>Projects</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </Navigation>
    )
}
const Navigation = styled.nav`
    font-family: "neontubes";
    display: flex;
    justify-content: center;
    z-index: 7;
  
   ul {
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
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
    padding:1em 2em 2em 2em;
  
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
    0 0 1000px rgba(29, 167, 10,1);
      font-weight: 600;
      text-transform: uppercase;
  }   

  @media screen and (max-width: 1000px) {
    position: fixed;
    width:100%;
    ul {
      display:flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      padding:0;
    }
    ul li{
      padding:1em;
    }
  }
  @media screen and (max-width: 700px) {
    ul {
      font-size: 0.65em;
    }
  } 
  `;
export default Navbar;