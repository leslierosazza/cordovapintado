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
    ${mobile} {
		width:375px;
        max-width: 90%;
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
    position: relative;
    bottom: 30px;
    cursor: pointer;
    /* box-shadow: 3px 3px 3px 3px #999; */
    /* animation: ${pulse} 2s infinite; */

    &:hover{
        animation: ${shake} 1s;
    }

    ${desktop} {
        left: 1048px;
    }

    ${mobile} {
		left:200px;
        bottom: 20px;
	}
    ${tablet} {
        left: 540px; 
	} 
`;

export const Hamburger = styled.div`
    display: none;
    position: fixed;
    margin-bottom: 16px;
    margin-top: 30px; 
    width: 80px; 
    background: #707070;
    font-size: 30px;
    border-radius: 10px;
    ${mobile} {
		display: block;
        position: relative;
        background: white;
	}
`;