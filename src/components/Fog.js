import styled, { keyframes } from 'styled-components';
import fogImg from '../Images/fog-horizontal.png';

const foganimation = keyframes` 
    0% {
      transform: translateX(-98vw) translateY(0%);
    }
    50% {
      transform: translateX(0%) translateY(0);
    }
    100% {
      transform: translateX(-98vw) translateY(0);
    }
  `;
  
 const Fog = styled.div`
  position:fixed;
  z-index: 1;
  opacity:0.5;
  width:200vw;
  height: 100vh;
  background-image:url(${fogImg});
  background-repeat: no-repeat;
  background-size: 200% 70%;
  background-position: bottom;
  overflow: hidden;
  animation: ${foganimation} 80s linear infinite alternate;
  pointer-events: none;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export default Fog;