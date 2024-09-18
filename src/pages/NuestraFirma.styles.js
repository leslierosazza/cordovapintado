import styled, { css } from "styled-components";

const desktopStartWidth = 992;
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

export const Img2 = styled.img`
    ${EstiloImg};
    position: relative;
    ${mobile}{
        width: 325px;
    }
`;

export const TituloBanner = styled.div`
    position: absolute;
    color: white;
    top: 400px;
    right: 564px;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    ${mobile}{
        top: 280px;
        right: 50px;
    }
`;

export const Banner = styled.img`
    position: relative;
    display: block;
    width: 100%;
    height: 562px;
    ${tablet}{
        display: block;
        width: 80%;
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
    ${mobile}{
        display: flex;
        flex-direction: column;
    }
`;

export const Card = styled.div`
    width: 270px;
    height: 510px;
    background: #D9D9D9;
    border-radius: 8px;
    border: 1px solid #f0f0f0;
    line-height: 1.6;
    text-align: justify;
    ${mobile}{
        width: 118%;
        height: auto;
        margin-bottom: 20px;
        padding: 20px;
    }
`;

export const Text = styled.text`
    display: block;
    text-align: justify;
    line-height: 24px;
    padding: 0 15px;
    ${mobile}{
        display: block;
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    margin: 30px 0px;
    ${mobile}{
        font-size: 28px;
    }
`;

export const Titleh3 = styled.h3`
    font-size: 30px;
    margin: 20px 80px;
    ${mobile}{
        font-size: 28px;
        margin: 0 15px;
    }
`;

export const Img = styled.img`
    width: 220px;
    height: 200px;
    padding: 15px;
    margin: 0 24px;
    ${mobile}{
        margin: 0 40px;
    }
`;

export const ColStyled = styled.div`
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
    ${mobile}{
        width: 320px;
        padding: 10px;
    }
`;