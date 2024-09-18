import styled, { keyframes } from "styled-components";

const desktopStartWidth = 992;
const tabletStartWidth = 768;
const mobileStartWidth = 767;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${tabletStartWidth}px)`;
const mobile = `@media (max-width: ${mobileStartWidth}px)`;

export const LogoFooter = styled.img`
    /* background-image: url("src/images/Logo-AC.png"); */
    background-repeat: no-repeat;
    background-size: contain;
    width: 200px;
    height: 180px;
    ${mobile} {
		width:100px;
        height: auto;
	}
`;

export const ContenedorFooter = styled.div`
    background: #d9d9d9;
    padding: 40px 20px 0px;
    margin: auto;
    width: 90%;
    height: auto;
    max-width: calc(100% - 8px);
    position: relative;
    ${mobile} {
		width:375px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
	}
    
`;

export const ImgLogo = styled.img`
    background-repeat: no-repeat;
    background-size: cover;
    width: 104px;
    height: 58px;
    ${mobile} {
        margin-top: 40px;
        margin-bottom: 10px;
	  }
`;

const pulse = keyframes`
    0% {
            box-shadow: 0 0 0 0px #08100bfa rgba(0, 0, 0, 0.2);
        }
    100% {
            box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
        }
`;

const shake = keyframes`
    0% { transform: translateY(0) }
    25% { transform: translateY(8px) }
    50% { transform: translateY(-8px) }
    75% { transform: translateY(8px) }
    100% { transform: translateY(0) }
`;

export const ImgWhatsApp = styled.img`
    width: 90px;
    height: 90px;
    position: absolute;
    left: 1100px;
    bottom: -17px;
    cursor: pointer;
    /* box-shadow: 3px 3px 3px 3px #999; */
    /* animation: ${pulse} 2s infinite; */

    &:hover{
        animation: ${shake} 1s;
    }

    ${desktop} {
        left: 1100px;
    }

    ${mobile} {
		left: 272px;
        bottom: -25px;
	}
    ${tablet} {
        /* left: 580px; 
        bottom: -30px; */
	} 
`;