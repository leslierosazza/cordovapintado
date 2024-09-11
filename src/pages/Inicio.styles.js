import styled, { css } from "styled-components";

const desktopStartWidth = 912;
const tabletStartWidth = 768;
const mobileStartWidth = 767;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${tabletStartWidth}px)`;
const mobile = `@media (max-width: ${mobileStartWidth}px)`;

const EstiloImg = css`
	display: block;
    width: 560px;
    height: auto;
    border-radius: 20px;
`;

export const Img = styled.img`
    ${EstiloImg};
    ${mobile}{
        width: 310px;
        margin: 0 -58px;
    }
    &:hover {
        filter: opacity(0.5);
        -webkit-transform:scale(1.07);
        transform:scale(1.07);
    }
`;

export const Image = styled.img`
    ${EstiloImg};
    ${mobile}{
        width: 315px;
        margin-top: 20px;
    }
    ${tablet}{
        margin-top: 15px;
    }
`;

export const Text = styled.text`
    display: flex;
    flex-direction: row;
    text-align: justify;
    line-height: 24px;
    width: 570px;

    ${mobile}{
        display: flex;
        flex-direction: row;
        width: 315px;
        margin: 0;
    }
    ${tablet}{
        /* margin: auto 60px; */
    }

    ${desktop}{
        margin: 0;
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    padding: 30px 0;
    margin: 0;
    ${mobile}{
        font-size: 20px;
    }
    ${tablet}{
        margin: 0 90px;
    }
`;

export const Titleh2 = styled.h2`
    position: absolute;
    font-size: 38px;
    top: 92px;
    left: 160px;
    color: #fff;
    width: 248px;
    ${mobile}{
        top: 45px;
        left: 10px;
        font-size: 30px;
    }
`;

export const Button = styled.button`
    position: absolute;
    top: 464px;
    right: 520px;
    background-color: #C59A4C;
    color: white;
    border-color: #707070;
    box-shadow: 0 2px 0 rgba(5, 145, 255, 0.1);
    font-size: 16px;
    font-weight: 700;
    line-height: 0.3;
    height: 40px;
    padding: 30px;
    border-radius: 20px;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        filter: opacity(0.9);
    }
    
    ${tablet}{
        right: 300px;
    } 
    
    ${mobile}{
        top: 290px;
        right: 100px;
        padding: 15px;
        border-radius: 10px;
    }
`;

export const TituloBanner = styled.div`
    position: absolute;
    color: white;
    top: 372px;
    right: 564px;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    ${desktop}{
        /*position: absolute;
        font-size: 28px;
        top: 336px;
        right: 126px; */
    }
    ${tablet}{
        right: 85px;
    } 
    ${mobile}{
        top: 200px;
        right: 30px;
        font-size: 15px;
    }
`;

export const Banner = styled.img`
    display: block;
    width: 100%;
    height: 562px;
    ${tablet}{
        display: block;
        height: auto;
    } 
    ${mobile}{
        width: 42%;
        height: auto; 
    }
`;

export const RowStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${desktop}{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    ${mobile}{
        display: flex;
        flex-direction: column;
    }
    ${tablet}{
        display: flex;
        flex-direction: column;
        margin: 0 55px;
        
    }
`;